<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2e399bc210e8a055780351afecb6f442
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WeTechPro\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WeTechPro\\' => 
        array (
            0 => __DIR__ . '/../..',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2e399bc210e8a055780351afecb6f442::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2e399bc210e8a055780351afecb6f442::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2e399bc210e8a055780351afecb6f442::$classMap;

        }, null, ClassLoader::class);
    }
}