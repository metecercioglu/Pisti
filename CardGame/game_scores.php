<?php
// Veritabanı bağlantısını ayarlayın
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cardgame"; // Veritabanı adınızı kontrol edin

// Bağlantıyı oluştur
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

// Oyun sonuçlarını al
if (isset($_GET['userScore']) && isset($_GET['computerScore'])) {
    $userScore = (int)$_GET['userScore'];
    $computerScore = (int)$_GET['computerScore'];
    $player_name = $userScore > $computerScore ? "User" : "Computer";

    // Skorları veritabanına kaydet
    $sql = "INSERT INTO game_results (user_score, computer_score, winner) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iis", $userScore, $computerScore, $player_name);

    if ($stmt->execute()) {
        echo "Skorlar başarıyla kaydedildi.";
    } else {
        echo "Hata: " . $stmt->error;
    }

    // Bağlantıyı kapat
    $stmt->close();
}

$conn->close();
?>
