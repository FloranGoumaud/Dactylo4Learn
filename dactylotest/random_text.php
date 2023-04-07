<?php
// Liste des fichiers textes disponibles
$txtFiles = glob("txt/*.txt");

// Choix d'un fichier texte aléatoire
$txtFile = $txtFiles[array_rand($txtFiles)];

// Ouverture et affichage du contenu du fichier texte
if ($fp = fopen($txtFile, "r")) {
    while (!feof($fp)) {
        echo fgets($fp);
    }
    fclose($fp);
}

// Affichage de la source du document
$sourceFile = str_replace("txt/", "source/", $txtFile);
if (file_exists($sourceFile)) {
    echo "<br><br>Source : ";
    if ($fp = fopen($sourceFile, "r")) {
        while (!feof($fp)) {
            echo fgets($fp);
        }
        fclose($fp);
    }
}
?>
