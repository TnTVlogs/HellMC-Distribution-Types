/**
 * The kind of a distribution {@link Module}, as described in `distro.md` §Module Types.
 */
export enum Type {
    ForgeHosted = 'ForgeHosted',
    /**
     * Legacy, never fully implemented upstream (forge auto-resolving its own
     * libraries from Forge's servers): kept only so modules authored against
     * it (if any) keep resolving to the same path as `Library`.
     */
    Forge = 'Forge',
    Fabric = 'Fabric',
    LiteLoader = 'LiteLoader',
    Library = 'Library',
    ForgeMod = 'ForgeMod',
    LiteMod = 'LiteMod',
    FabricMod = 'FabricMod',
    VersionManifest = 'VersionManifest',
    File = 'File'
}

/**
 * Where a module's artifact is resolved from: `maven` uses the module `id`
 * (group:artifact:version[@extension]) to derive the path, `instance` stores
 * the file inside the version's own instance directory.
 */
export type ModuleStorageStrategy = 'maven' | 'instance'

export interface TypeMetadataEntry {
    /** How the artifact's on-disk path is resolved. */
    storage: ModuleStorageStrategy
    /**
     * Base directory (relative to the common directory for `maven` storage)
     * modules of this type are placed under. `null` when there is no single
     * fixed base directory (e.g. `File`, which resolves under the version's
     * own instance directory instead).
     */
    baseDirectory: string | null
    /** Whether modules of this type may declare `subModules`. */
    allowsSubModules: boolean
    /** Whether modules of this type may be toggled optional via `Module.required`. */
    canBeOptional: boolean
    /**
     * Default `Artifact` file extension for this type when a module's id
     * omits one (see `distro.md` §Module.id: "If the extension is not
     * provided, it defaults to jar"). `undefined` when a type has no
     * sensible default (e.g. `File`, which normally declares an explicit
     * `artifact.path` instead of relying on extension inference).
     */
    defaultExtension?: string
}

export const TypeMetadata: Readonly<Record<Type, TypeMetadataEntry>> = {
    [Type.ForgeHosted]: { storage: 'maven', baseDirectory: 'libraries', allowsSubModules: true, canBeOptional: false, defaultExtension: 'jar' },
    [Type.Forge]: { storage: 'maven', baseDirectory: 'libraries', allowsSubModules: false, canBeOptional: false, defaultExtension: 'jar' },
    [Type.Fabric]: { storage: 'maven', baseDirectory: 'libraries', allowsSubModules: true, canBeOptional: false, defaultExtension: 'jar' },
    [Type.LiteLoader]: { storage: 'maven', baseDirectory: 'libraries', allowsSubModules: true, canBeOptional: true, defaultExtension: 'jar' },
    [Type.Library]: { storage: 'maven', baseDirectory: 'libraries', allowsSubModules: false, canBeOptional: false, defaultExtension: 'jar' },
    [Type.ForgeMod]: { storage: 'maven', baseDirectory: 'modstore', allowsSubModules: true, canBeOptional: true, defaultExtension: 'jar' },
    [Type.LiteMod]: { storage: 'maven', baseDirectory: 'modstore', allowsSubModules: false, canBeOptional: true, defaultExtension: 'litemod' },
    [Type.FabricMod]: { storage: 'maven', baseDirectory: 'mods/fabric', allowsSubModules: true, canBeOptional: true, defaultExtension: 'jar' },
    [Type.VersionManifest]: { storage: 'maven', baseDirectory: 'versions', allowsSubModules: false, canBeOptional: false, defaultExtension: 'json' },
    [Type.File]: { storage: 'instance', baseDirectory: null, allowsSubModules: true, canBeOptional: false }
}
