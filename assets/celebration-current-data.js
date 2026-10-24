// Load dated snapshots before this catalog. Never derive archives from the latest event.
(() => {
  const snapshots = window.celebrationEventSnapshots || [];
  const ids = new Set();
  const freeze = (value) => {
    if (value && typeof value === "object") {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const events = snapshots.map((source) => {
    const event = structuredClone(source);
    if (event.schemaVersion !== 1 || !event.archiveId || ids.has(event.archiveId)) {
      throw new Error("庆典档案版本或编号无效");
    }
    ids.add(event.archiveId);
    // Each archive owns its icons, even if a future resource reuses the same filename.
    const resolveIcons = (value) => {
      if (!value || typeof value !== "object") return;
      for (const [key, item] of Object.entries(value)) {
        if (typeof item === "string" && (key === "icon" || value === event.itemIcons)) {
          value[key] = event.assetRoot + item;
        } else if (item && typeof item === "object") {
          resolveIcons(item);
        }
      }
    };
    resolveIcons(event);
    return freeze(event);
  }).sort((a, b) => b.event.start.localeCompare(a.event.start) || b.archiveId.localeCompare(a.archiveId));
  if (!events.length) throw new Error("没有可用的庆典档案");
  const requestedId = new URLSearchParams(window.location.search).get("event");
  const selected = events.find((event) => event.archiveId === requestedId) || events[0];
  window.celebrationEventArchive = freeze({ events, latestId: events[0].archiveId, selectedId: selected.archiveId });
  window.celebrationCurrentData = selected;
})();
