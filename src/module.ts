import { Artifact, Required } from './artifact.js'
import { Type } from './type.js'

/**
 * A generic representation of a file required to run the Minecraft client:
 * a mod, library, loader or arbitrary file.
 */
export interface Module {
    /**
     * The module id. Modules not of type `File` must use a maven identifier
     * (`group:artifact:version[@extension]`), used both as metadata and,
     * when `artifact.path` is omitted, to resolve the on-disk path.
     */
    id: string
    /** Display name, shown on the UI. */
    name: string
    /** The kind of module (see {@link Type}). */
    type: Type
    /**
     * For `Library` modules, whether to add it to the classpath.
     * Defaults to `true`.
     */
    classpath?: boolean
    /**
     * HellMC extension (not part of upstream Helios): ids of every other
     * module this module requires to load. Only meaningful for optional mod
     * modules (`ForgeMod`, `FabricMod`, `LiteMod`). Used to toggle optional
     * mods as a group — enabling a mod enables its dependencies, a
     * dependency cannot be disabled while something enabled still needs it,
     * and disabling a mod disables any dependency nothing else needs.
     * Unknown ids are ignored.
     */
    dependencies?: string[]
    /**
     * Whether the module is required, and whether it's enabled by default
     * when not. Only meaningful for `ForgeMod`, `LiteMod`, `LiteLoader`.
     * Defaults to required when omitted.
     */
    required?: Required
    /** The download artifact for this module. */
    artifact: Artifact
    /** Nested modules declared by this one (e.g. a mod and its config file). */
    subModules?: Module[]
}
