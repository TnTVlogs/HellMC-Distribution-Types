/**
 * Global Discord Rich Presence settings, set at the root of the {@link Distribution}.
 */
export interface DiscordSettings {
    /** Client ID of the application registered with Discord. */
    clientId: string
    /** Tooltip for {@link smallImageKey}. */
    smallImageText: string
    /** Name of the uploaded image for the small profile artwork. */
    smallImageKey: string
}

/**
 * Per-server Discord Rich Presence settings (moved here from the version in v2, D3).
 */
export interface ServerDiscordSettings {
    /** Short id shown on the second status line as `Server: shortId`. */
    shortId: string
    /** Tooltip for {@link largeImageKey}. */
    largeImageText: string
    /** Name of the uploaded image for the large profile artwork. */
    largeImageKey: string
}
