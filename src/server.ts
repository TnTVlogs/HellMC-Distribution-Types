import { ServerDiscordSettings } from './discord.js'

/**
 * A version offered by a {@link Server}, in catalog order.
 */
export interface ServerVersionEntry {
    /** Id of a {@link Version} in `Distribution.versions`. Ignored with a warning by Nebula if it doesn't exist. */
    id: string
    /** Exactly one entry per server should set this to `true`. Falls back to the first entry when none/multiple do. */
    recommended?: boolean
}

/**
 * A Minecraft server managed by the admin (new in v2): identity, address and
 * the versions it offers. Distinct from a {@link Version} — see D1/D2 in
 * `01-terminologia-i-dades.md`.
 */
export interface Server {
    /** Stable, unique slug. */
    id: string
    /** Display name, shown on the UI. */
    name: string
    /** Short description, shown on the server card. */
    description: string
    /** Optional long-form Markdown description, shown on the server detail view. */
    descriptionLong?: string
    /** URL to the server's (square) icon, if one is set. */
    icon?: string
    /** URL to the server's banner (fixed aspect ratio, e.g. 16:5), if one is set. */
    banner?: string
    /** `host` or `host:port` to connect to. */
    address: string
    /** Whether the client should auto-connect to this address on launch, if the player enabled that setting. */
    autoconnect: boolean
    /** At most one server should set this to `true`; pre-selected on first launch. */
    mainServer?: boolean
    /** Free-form tags (e.g. "Survival", "Modpack"). */
    tags?: string[]
    /** Optional server-specific news RSS feed, in addition to the global one. */
    rss?: string
    /** Discord Rich Presence settings specific to this server. */
    discord?: ServerDiscordSettings
    /** Versions offered by this server, in display order. Exactly one should be `recommended`. */
    versions: ServerVersionEntry[]
    /** Position in the server grid. */
    sortOrder?: number
    /** Whether this server is visible in the published distribution. */
    published?: boolean
}
