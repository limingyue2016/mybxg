<?php

$path = 'index';
$filename = 'index';


if(array_key_exists('PATH_INFO',$_SERVER)){
	$pathinfo = $_SERVER['PATH_INFO'];
	$pathinfo = explode('/', substr($pathinfo, 1));
	if(count($pathinfo) == 2) {
		$path = $pathinfo[0];
		$filename = $pathinfo[1];
	}else{
                 $filename = 'login';
             }

}
else{
        $filename = 'login';
    }
include './views/' . $path . '/' . $filename . '.html';

