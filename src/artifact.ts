/**
 * The download artifact for a {@link Module}.
 */
export interface Artifact {
    /** Size of the artifact in bytes. */
    size: number
    /**
     * SHA-256 hash of the artifact as 64 lowercase hex characters, used by the
     * launcher to validate local copies. It is the only hash in the format.
     *
     * Omitted only for "untracked" files (a Nebula extension, see
     * `untrackedFiles` in a version's `versionmeta.json`): those are not
     * validated. The launcher rejects any other module without `sha256`.
     */
    sha256?: string
    /**
     * Explicit marker for "untracked" files (see `sha256`): `true` means the
     * file is intentionally emitted without a hash and the launcher only
     * downloads it when it is missing (it never repairs or replaces an
     * existing copy). Without this marker the launcher cannot tell an
     * untracked file from a module whose hash got lost, so a module with
     * neither `sha256` nor `untracked: true` is refused.
     */
    untracked?: true
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
