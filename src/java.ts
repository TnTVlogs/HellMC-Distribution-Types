import { Architecture, JdkDistribution, Platform } from './platform.js'

/**
 * Platform/architecture-specific override of a {@link JavaOptions} ruleset.
 * The most specific match wins: current platform + architecture, then
 * current platform only, then the base `JavaOptions`, then client defaults.
 */
export interface JavaPlatformOptions {
    /** The platform this ruleset applies to. */
    platform: Platform
    /** The architecture this ruleset applies to. Applies to all architectures when omitted. */
    architecture?: Architecture
    /** See {@link JavaOptions.distribution}. */
    distribution?: JdkDistribution
    /** See {@link JavaOptions.supported}. */
    supported?: string
    /** See {@link JavaOptions.suggestedMajor}. */
    suggestedMajor?: number
}

/**
 * Minimum and recommended RAM for a version, in megabytes. Must be a
 * multiple of 512.
 */
export interface RamOptions {
    /** Default value pre-selected for this version. */
    recommended: number
    /** Smallest value the player can select. */
    minimum: number
}

/**
 * Version-specific Java requirements. Unset fields fall back to client defaults.
 */
export interface JavaOptions {
    /** Platform-specific overrides, applied by specificity (see {@link JavaPlatformOptions}). */
    platformOptions?: JavaPlatformOptions[]
    /** Minimum/recommended RAM for this version. */
    ram?: RamOptions
    /** Preferred JDK distribution to download if none is found locally. */
    distribution?: JdkDistribution
    /** Semver range of supported JDK versions. Requires {@link suggestedMajor} to also be set. */
    supported?: string
    /** Suggested major JDK version, used for messaging and to fetch a JDK automatically. */
    suggestedMajor?: number
}
