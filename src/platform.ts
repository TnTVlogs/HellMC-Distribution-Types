/**
 * Operating system a {@link JavaPlatformOptions} rule or JDK asset applies to.
 * Values match Node's `process.platform`.
 */
export enum Platform {
    WIN32 = 'win32',
    DARWIN = 'darwin',
    LINUX = 'linux'
}

/**
 * CPU architecture a {@link JavaPlatformOptions} rule or JDK asset applies to.
 * Values match Node's `process.arch`.
 */
export enum Architecture {
    X64 = 'x64',
    ARM64 = 'arm64'
}

/** JDK vendor to fetch when no local install satisfies a version's requirements. */
export enum JdkDistribution {
    TEMURIN = 'TEMURIN',
    CORRETTO = 'CORRETTO'
}
