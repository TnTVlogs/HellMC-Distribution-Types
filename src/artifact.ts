/**
 * The download artifact for a {@link Module}.
 */
export interface Artifact {
    /** Size of the artifact in bytes. */
    size: number
    /**
     * MD5 hash of the artifact, used to validate local copies. Omitted for
     * "untracked" files (a Nebula extension, see `untrackedFiles` in a
     * version's `versionmeta.json`): the launcher then skips validation for
     * that file entirely instead of comparing against a hash.
     */
    MD5?: string
    /**
     * Relative path where the file is saved, appended to the base directory
     * for the module's declared type. If omitted, resolved from the module id.
     */
    path?: string
    /** Download URL for the artifact. */
    url: string
}

/**
 * Whether a module is required, and whether it is enabled by default when not.
 */
export interface Required {
    /** If the module is required. Defaults to `true` when omitted. */
    value?: boolean
    /** If the module is enabled by default when `value` is `false`. Defaults to `true` when omitted. */
    def?: boolean
}
