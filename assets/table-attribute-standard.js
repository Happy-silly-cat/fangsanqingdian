(() => {
  "use strict";

  const attributeElementSelector = [
    ".attribute",
    ".attribute-item",
    ".attribute-chip",
    ".attribute-pill",
    ".attribute-value",
    ".attribute-row-item",
    ".attr-result"
  ].join(",");
  const attributeHeaderPattern = /属性|攻击|生命|物防|法防/;
  const knownAttributePattern = /(全体)?(攻击|生命|物防|法防|攻击比|生命比|伤害|免伤|命中|闪避|暴击|抗暴|格挡|破挡|魅力增伤|魅力减伤)/;
  const separatorPattern = /^[\s、，,；;|/·:：()（）+-]*$/;

  function parseAttributeText(value, allowUnsigned = false) {
    const source = String(value || "").trim();
    if (!source || source === "—") return [];

    const matches = [];
    const expression = /([^+＋\-\d]+?)\s*([+＋-]?)\s*(\d[\d,]*(?:\.\d+)?%?)/g;
    let lastIndex = 0;
    let match;
    while ((match = expression.exec(source))) {
      if (!separatorPattern.test(source.slice(lastIndex, match.index))) return [];
      const label = match[1].replace(/^[\s、，,；;|/·:：()（）]+|[\s、，,；;|/·:：()（）]+$/g, "").trim();
      const sign = match[2].replace("＋", "+");
      if (!label || (!sign && !allowUnsigned)) return [];
      matches.push({ label, value: `${sign || "+"}${match[3]}` });
      lastIndex = expression.lastIndex;
    }
    if (!matches.length || !separatorPattern.test(source.slice(lastIndex))) return [];
    return matches;
  }

  function attributeNode({ label, value }) {
    const wrapper = document.createElement("span");
    wrapper.className = "fs-attribute";
    const name = document.createElement("span");
    name.textContent = label;
    const amount = document.createElement("strong");
    amount.className = "fs-attribute-value";
    amount.textContent = value;
    wrapper.append(name, amount);
    return wrapper;
  }

  function normalizeAttributeElement(element) {
    if (element.classList.contains("fs-attribute")) return;
    element.classList.add("fs-attribute");
    if (element.querySelector("strong, em, .fs-attribute-value")) return;
    const parsed = parseAttributeText(element.textContent);
    if (parsed.length !== 1) return;
    element.replaceChildren(...attributeNode(parsed[0]).childNodes);
  }

  function normalizePlainAttributeElement(element) {
    if (element.closest(".material-list, .cost-list, .resource-list") || element.children.length) return false;
    const parsed = parseAttributeText(element.textContent);
    if (parsed.length !== 1 || !knownAttributePattern.test(parsed[0].label)) return false;
    element.classList.add("fs-attribute");
    element.replaceChildren(...attributeNode(parsed[0]).childNodes);
    return true;
  }

  function normalizeCell(cell, headerText) {
    const existing = [...cell.querySelectorAll(attributeElementSelector)];
    existing.forEach(normalizeAttributeElement);
    if (existing.length) {
      cell.classList.add("fs-attribute-cell");
      return;
    }

    const normalizedPlainElement = [...cell.querySelectorAll("span")]
      .map(normalizePlainAttributeElement)
      .some(Boolean);
    if (normalizedPlainElement) {
      cell.classList.add("fs-attribute-cell");
      return;
    }
    if (cell.children.length) return;

    const headerIsAttribute = attributeHeaderPattern.test(headerText);
    const textLooksLikeAttribute = knownAttributePattern.test(cell.textContent || "");
    if (!headerIsAttribute && !textLooksLikeAttribute) return;

    const parsed = parseAttributeText(cell.textContent, headerIsAttribute && /^(攻击|生命|物防|法防)$/.test(headerText.trim()));
    if (!parsed.length) return;
    const list = document.createElement("div");
    list.className = "fs-attribute-list";
    parsed.forEach((attribute) => list.append(attributeNode(attribute)));
    cell.classList.add("fs-attribute-cell");
    cell.replaceChildren(list);
  }

  function normalizeTable(table) {
    const headers = [...table.querySelectorAll("thead tr:last-child th")].map((header) => header.textContent.trim());
    if (!headers.length) return;
    table.querySelectorAll("tbody tr").forEach((row) => {
      [...row.cells].forEach((cell, index) => normalizeCell(cell, headers[index] || ""));
    });
  }

  function normalizeAllTables(root = document) {
    if (root.matches?.("table")) normalizeTable(root);
    root.querySelectorAll?.("table").forEach(normalizeTable);
  }

  function start() {
    normalizeAllTables();
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        normalizeAllTables();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
