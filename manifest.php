<?php
header('Content-Type: text/cache-manifest');
$filesToCache = array(
	'./apple-touch-icon-precomposed-120x120.png',
	'./css/framework7.ios.min.css',
	'./css/framework7.ios.colors.min.css',
	'./css/my-app.css',
	'./js/popcorn-complete.min.js',
	'./js/framework7.min.js',
	'./js/my-app.js',
	'./img/radioshow.mp3',
	'./img/studio.mov',
	'./index.html',
	'./kermodemayo.html',
	'./img/banner.png',
	'./img/dummy-mark.jpg',
	'./img/dummy-simon.jpg',
	'./img/entourage-clip-full.gif',
	'./img/entourage.jpg',
	'./img/home-screen.jpg',
	'./img/loading.png',
	'./img/mobile_control_bar_08.png',
	'./img/radio+_logo_02.png',
	'./img/tweet.png'
);
?>
CACHE MANIFEST

CACHE:
<?php
// Print files that we need to cache and store hash data
$hashes = '';
foreach($filesToCache as $file) {
    echo $file."\n";
    $hashes.=md5_file($file);
};
?>

NETWORK:
*

# Hash Version: <?=md5($hashes)?>