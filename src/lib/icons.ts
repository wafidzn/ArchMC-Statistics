// Common Material Icons for the ArchMC Statistics app
export const ICONS = {
  // Navigation
  home: "home",
  menu: "menu",
  close: "close",
  arrow_back: "arrow_back",
  arrow_forward: "arrow_forward",
  
  // Gaming & Combat (Material Symbols)
  swords: "swords", // Available in Material Symbols
  shield: "shield",
  sports_esports: "sports_esports",
  videogame_asset: "videogame_asset",
  emoji_events: "emoji_events",
  leaderboard: "leaderboard",
  military_tech: "military_tech",
  
  // Player/Profile
  person: "person",
  group: "group",
  account_circle: "account_circle",
  
  // Stats
  trending_up: "trending_up",
  bar_chart: "bar_chart",
  analytics: "analytics",
  assessment: "assessment",
  
  // Economy
  attach_money: "attach_money",
  account_balance: "account_balance",
  monetization_on: "monetization_on",
  
  // Actions
  search: "search",
  refresh: "refresh",
  settings: "settings",
  info: "info",
  
  // Status
  check_circle: "check_circle",
  error: "error",
  warning: "warning",
  
  // Arrows
  arrow_circle_right: "arrow_circle_right",
  arrow_circle_left: "arrow_circle_left",
} as const;

export type IconName = keyof typeof ICONS;