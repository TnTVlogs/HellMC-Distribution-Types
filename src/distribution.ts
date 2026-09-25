import { DiscordSettings } from './discord.js'
import { Server } from './server.js'
import { Version } from './version.js'

/**
 * Root of `distribution.json` v2. Superseded field: the old `servers[]`
 * (entries with `modules`) is now `versions[]`; `servers[]` is the new
 * server catalog (see D20/§4 in `01-terminologia-i-dades.md`). Never
 * interpret a distribution file without checking `format` first.
 */
export interface Distribution {
    /** Format tag. `2` for this schema; absent/different values must not be parsed as v2. */
    format: 2
    /** Minimum client version able to load this distribution. */
    minClientVersion?: string
    /** Opaque publish version/timestamp of this distribution. */
    version: string
    /** Global news RSS feed. */
    rss?: string
    /** Global Discord Rich Presence settings. */
    discord?: DiscordSettings
    /** Server catalog, in `sortOrder`. */
    servers: Server[]
    /** All published versions, in `sortOrder`. */
    versions: Version[]
}
