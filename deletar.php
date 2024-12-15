<?php

if (isset($_POST['id_membro'])) {

	$pdo = new PDO('mysql:mysql:host=localhost; dbname=bootstrap_projeto; port=3307', 'root', '');
	$sql = $pdo -> prepare('DELETE FROM `tb_equipe` WHERE `id` = ?');
	$sql -> execute(array($_POST['id_membro']));

	}

?>