import { JavaOptions } from './java.js'
import { Module } from './module.js'

/** Mod loader a {@link Version} is built on. */
export type LoaderType = 'forge' | 'fabric' | 'neoforge'

/**
 * A concrete, playable game configuration: a Minecraft version + loader +
 * mods. Called `Server` prior to the v2 rename (see `01-terminologia-i-dades.md`).
 * A version may belong to zero, one or several {@link Server} catalog entries,
 * and can always be played directly ("play without a server").
 */
export interface Version {
    /**
     * Stable id. The launcher keys mod configurations, Java options and
     * install state by this id — it must never change once published.
     */
    id: string
    /** Display name, shown on the UI. */
    name: string
    /** Short label for dropdowns (e.g. "Forge 1.20.1"). Derived from loader + Minecraft version if omitted. */
    label?: string
    /** Short description shown on the UI. */
    description: string
    /** Semver publish revision of this version's configuration. */
    version: string
    /** The Minecraft version this version runs. */
    minecraftVersion: string
    /** Mod loader this version is built on. */
    loader: LoaderType
    /** Loader version, when applicable. */
    loaderVersion?: string
    /** Markdown changelog, written by the admin on publish. */
    changelog?: string
    /** Java requirements for this version. Falls back to client defaults when omitted. */
    javaOptions?: JavaOptions
    /** Modules (loader, libraries, mods, files) that make up this version. */
    modules: Module[]
    /** URL to this version's icon. */
    icon?: string
    /** Whether this version is visible in the published distribution. */
    published?: boolean
    /**
     * Whether the player can share saves/resourcepacks/etc. between this version and others (D26).
     * `shared` (default when omitted, for compatibility with clients/distributions that predate
     * this field): the player may opt in or out per version. `forcedSeparate`: the admin has locked
     * this version to always have its own data, no player choice shown — see
     * `01-terminologia-i-dades.md` §3.1.1.
     */
    dataSharing?: 'shared' | 'forcedSeparate'
}
