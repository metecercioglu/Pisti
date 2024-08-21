document.getElementById("dealButton").addEventListener("click", function() { // Butona tıklama olayı ekler
    const dealButton = this;
    dealButton.disabled = true;
    const cards = document.querySelectorAll('.card, .card-user , .cards-middle'); // Tüm kartları seçer

    const cardNames = [ //dizi oluşturma
        '2-C', '2-D', '2-H', '2-S',
        '3-C', '3-D', '3-H', '3-S',
        '4-C', '4-D', '4-H', '4-S',
        '5-C', '5-D', '5-H', '5-S',
        '6-C', '6-D', '6-H', '6-S',
        '7-C', '7-D', '7-H', '7-S',
        '8-C', '8-D', '8-H', '8-S',
        '9-C', '9-D', '9-H', '9-S',
        '10-C', '10-D', '10-H', '10-S',
        'J-C', 'J-D', 'J-H', 'J-S',
        'Q-C', 'Q-D', 'Q-H', 'Q-S',
        'K-C', 'K-D', 'K-H', 'K-S',
        'A-C', 'A-D', 'A-H', 'A-S'
    ];

        // Rastgele kart seçimi
        let selectedCards = [];
        while (selectedCards.length < 12) {
            const randomIndex = Math.floor(Math.random() * cardNames.length);
            const card = cardNames[randomIndex];
    
            // Seçilen kartlar arasında tekrar olmamasını sağla
            if (!selectedCards.includes(card)) {
                selectedCards.push(card);
            }
        }
    
    // Kartların konumlarını belirleyen diziler
    const MiddlecardPositions = [
        { top: 'calc(50px +50%)', left: 'calc(505px - 50%)', transform: 'rotate(10deg)' },
        { top: 'calc(50px +50%)', left: 'calc(510px - 50%)', transform: 'rotate(5deg)' },
        { top: 'calc(50px +50%)', left: 'calc(500px + 50%)', transform: 'rotate(-2deg)' },
        { top: 'calc(50px +50%)', left: 'calc(495px + 50%)', transform: 'rotate(-5deg)' }
    ];

    const cardPositions = [
        { top: 'calc(-300px - 50%)', left: 'calc(670px - 50%)', transform: 'rotate(10deg)' },
        { top: 'calc(-300px - 50%)', left: 'calc(620px - 50%)', transform: 'rotate(5deg)' },
        { top: 'calc(-300px - 50%)', left: 'calc(570px + 50%)', transform: 'rotate(-2deg)' },
        { top: 'calc(-300px - 50%)', left: 'calc(520px + 50%)', transform: 'rotate(-5deg)' }
    ];

    const userCardPositions = [
        { top: 'calc(300px - 50%)', left: 'calc(520px + 50%)', transform: 'rotate(5deg)' }, // 1. kart
        { top: 'calc(300px - 50%)', left: 'calc(570px + 50%)', transform: 'rotate(0deg)' }, // 2. kart
        { top: 'calc(300px - 50%)', left: 'calc(620px - 50%)', transform: 'rotate(-5deg)' }, // 3. kart
        { top: 'calc(300px - 50%)', left: 'calc(670px - 50%)', transform: 'rotate(-10deg)' }  // 4. kart
    ];

    const userCardPositionsErn = [
        { top: 'calc(300px - 50%)', left: 'calc(750px + 50%)', transform: 'rotate(5deg)' }
    ];

    const cardPositionsErn = [
        { top: 'calc(-300px - 50%)', left: 'calc(450px - 50%)', transform: 'rotate(10deg)' }
    ];



    cards.forEach(card => {
        card.classList.remove('animate'); // 'animate' sınıfını kaldırarak görünmez yap
        card.style.top = '50%'; // Kartların başlangıç üst konumunu ayarlar
        card.style.left = '50%'; // Kartların başlangıç sol konumunu ayarlar
        card.style.transform = 'translate(-50%, -50%) rotate(0deg)'; // Kartların başlangıç dönüş açısını ayarlar
    });
            
    // Her kart için animasyonu başlat
    cards.forEach((card, index) => {
        setTimeout(() => { // Gecikme ekler
            let cardName;

            if (card.classList.contains('card-user')) {
                cardName = selectedCards[index - 4]; // Kullanıcı kartı için seçilen kartları al
            }
            else if (card.classList.contains('cards-middle')) {
               cardName = selectedCards[index]; // Kullanıcı kartı için seçilen kartları al
            }
            else if (card.classList.contains('card')) {
                cardName = selectedCards[index + 4]; // Kullanıcı kartı için seçilen kartları al
            }

            // Kartın konumunu güncelle
            if (card.classList.contains('card')) { // Eğer kart bilgisayara aitse
                card.style.top = cardPositions[index].top; // Kartın üst konumunu ayarlar
                card.style.left = cardPositions[index].left; // Kartın sol konumunu ayarlar
                card.style.transform = cardPositions[index].transform; // Kartın dönüş açısını ayarlar
            } 
            else if (card.classList.contains('card-user')) { // Eğer kart kullanıcıya aitse
                card.style.top = userCardPositions[index - 4].top; // Kullanıcı kartının üst konumunu ayarlar
                card.style.left = userCardPositions[index - 4].left; // Kullanıcı kartının sol konumunu ayarlar
                card.style.transform = userCardPositions[index - 4].transform; // Kullanıcı kartının dönüş açısını ayarlar
            }
           else if (card.classList.contains('cards-middle')) { 
                  card.style.top = MiddlecardPositions[index - 8].top; // Kullanıcı kartının üst konumunu ayarlar
                    card.style.left = MiddlecardPositions[index - 8].left; // Kullanıcı kartının sol konumunu ayarlar
                    card.style.transform = MiddlecardPositions[index - 8].transform; // Kullanıcı kartının dönüş açısını ayarlar
           }
        }, index * 400); // Her kart için 400ms gecikme ekle
    });

});




document.addEventListener('DOMContentLoaded', () => {
    const dealButton = document.getElementById('dealButton'); 
    const userCards = document.querySelectorAll('.card-user');// Kullanıcının elindeki kartları temsil eden kart öğelerini seçer.
    const middleCardsContainer = document.querySelector('.cards-container-middle');// Ortadaki kartların bulunduğu konteyneri seçer.
    const computerCards = document.querySelectorAll('.card');// Bilgisayarın elindeki kartları temsil eden kart öğelerini seçer.
    const userCollection = document.querySelector('.user-collection');// Kullanıcının topladığı kartların konulduğu alanı seçer.
    const computerCollection = document.querySelector('.computer-collection');// Bilgisayarın topladığı kartların konulduğu alanı seçer.
    const collectedCards = { user: [], computer: []}; // Kullanıcı ve bilgisayarın topladığı kartları depolamak için bir nesne oluşturur.   
    
    
    let deck = generateDeck(); // Kart destesi oluşturur
    let userHand = []; //kullanıcının elindeki sayılar 
    let computerHand = []; // bilgisayarın elindeki sayılar 
    let middle = []; //ortada bulunan kartlar
    let userScore = 0; // kullanıcının skoru
    let computerScore = 0; //bilgisayarın skoru
    let cardsPlayed = 0; // Oynanan kart sayısını takip eder // 8 oldukça
    let playedCardCount = 0; // oyundaki kartları sayıp bitmesini sağlar 
    let score = { user: 0,  computer: 0}; //burada kartlardan gelen sayıları tutar
    let pistiScores = {  user: 0,  computer: 0}; //burada piştiden gelen sayıları tutar

    dealButton.addEventListener('click', () => { dealButton.style.display = 'none';    
        dealCards();  
    }); // deal butonuna tıklandığında çalışacak


    //------------------------------------------------------
    // diziyi yaratma
    function generateDeck() { 
        const suits = ['C', 'D', 'H', 'S'];     // Dört farklı kart çeşidini tanımlar: Karo (C), Kupa (D), Sinek (H), Maça (S)
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let deck = [];     // Boş bir dizi oluşturur ve bu dizi kart destesini temsil eder.
        for (let suit of suits) {     // Her bir kart çeşidi için döner
            for (let value of values) { // Her bir kart değeri için döner
                deck.push(`${value}-${suit}`); // burada diziyi yazdırır 
            }
        }
        return shuffle(deck); // Deste oluşturulduktan sonra karıştırır ve döner
    }

    //-----------------------------------------------------------
    // diziyi karıştırır 
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) { // Dizinin sonundan başlayarak her bir elemanı karıştırma işlemi yapar
            const j = Math.floor(Math.random() * (i + 1)); // 0 ile i (dahil) arasında rastgele bir indeks seçer
            [array[i], array[j]] = [array[j], array[i]]; // i ve j indekslerindeki elemanları yer değiştirir
        }
        return array; // Karıştırılmış diziyi döner
    }
    //-----------------------------------------------------------

    function dealCards() { 
        if (deck.length < 8) return; // Yeterli kart yoksa işlem yapma
     
        if (middle.length === 0) { // Orta kartlar başlangıçta dağıtılmamışsa

            middle = deck.splice(0, 4); // Orta kartlar için desteden ilk 4 kartı al
            renderMiddle();
        }
        userHand = deck.splice(0, 4);
        computerHand = deck.splice(0, 4);
        renderHands();
        dealButton.disabled = true;
        cardsPlayed = 0; // Oynanan kart sayısını sıfırla
    }

    //-----------------------------------------------------------
    // eldeki kartlar 
    function renderHands() {
        // Kullanıcının elindeki kartları görüntüle
        userHand.forEach((cardName, index) => {
            const card = userCards[index];
            card.querySelector('img').src = `images/cards/${cardName}.png`; // Kart resmini ayarla
            card.classList.add('animate'); // Animasyon sınıfını ekler
            card.dataset.cardName = cardName; // Kart adını veri özniteliğine ata
            card.style.display = 'block'; // Kartı görünür yap  
        });
         // Bilgisayarın elindeki kartları görüntüle
        computerHand.forEach((cardName, index) => {
            const card = computerCards[index];
            card.querySelector('img').src = `images/cards/BACK.png`;//kartın arka yüzünü ayarla
            card.classList.add('animate'); // Animasyon sınıfını ekler
            card.dataset.cardName = cardName; // Kart adını veri özniteliğine ata
            card.style.display = 'block'; // Kartı görünür yap      
        });
    }

    //-----------------------------------------------------------

    function userPlayCard(cardElement) {
        const cardName = cardElement.dataset.cardName; // Kartın adını veri özniteliğinden al
        middle.push(cardName); // Kartı orta alana ekle
        userHand = userHand.filter(card => card !== cardName); // Kullanıcının elindeki kartları güncelle
        renderMiddle();
        cardElement.style.display = 'none'; // Kartı görünmez yap
        cardElement.querySelector('img').src = '';
        cardsPlayed++; // Oynanan kart sayısını arttır


        disableUserCards();

        if (shouldCollectCards(cardName)) {
            collectCards('user');
        }

        if (cardsPlayed % 8 === 0 && deck.length >= 8) { // 8 kart oynandıysa ve destede yeterli kart varsa
            dealCards();
        }
        else {
            setTimeout(() => {
                computerPlayCard();
            }, 1500); // Bilgisayarın kart oynamasını 1.5 saniye geciktir
        
            setTimeout(() => {
                // Bilgisayarın kartı oynadıktan sonra kullanıcı kartlarını tekrar aktif hale getir
                enableUserCards();
            }, 1900); // Kullanıcı kartlarını aktif hale getirmek için 1.9 saniye geciktir
        }
        
    }

    function disableUserCards() { 
        document.querySelectorAll('.card-user').forEach(card => {
            card.style.pointerEvents = 'none'; //Kartlara Tıklama olaylarını devre dışı bırak
        });
    }
    
    function enableUserCards() {
        document.querySelectorAll('.card-user').forEach(card => {
            card.style.pointerEvents = 'auto'; //kartlara Tıklama olaylarını tekrar aktif et
        });
    }
    
    //-----------------------------------------------------------
    // Ortadaki kartları güncelleme
    function renderMiddle() {
        middleCardsContainer.innerHTML = ''; // Ortadaki kartları temizle
        middle.forEach((cardName, index) => {
            const card = document.createElement('div'); // div oluşturur
            card.classList.add('cards-middle', 'animate'); // animasyon ve ortaya ekle
            card.style.left = `500px`; // Kartların sol konumunu düzelt
            card.style.top = `50px`; // Kartların üst konumunu sabit tut
            card.style.transform = `rotate(${Math.floor(Math.random() * 21) - 10}deg)`; // -10 ile 10 derece arasında rastgele dönüş açısı
            const img = document.createElement('img');
            img.src = `images/cards/${cardName}.png`;
            card.appendChild(img);
            middleCardsContainer.appendChild(card); // div kartını orta kartlar konteynerine ekle 
        });
    }

    //-----------------------------------------------------------
    // ortadaki karları toplanmalı mı ?
    function shouldCollectCards(cardName) {
        if (middle.length < 2) return false; // Toplayacak kadar kart yoksa
        // Orta destedeki son ikinci kart
        const lastCard = middle[middle.length - 2];
        // Oynanan kartın veya son ikinci kartın değeri 'J' ise ya da ikisinin değeri eşitse
        return  cardName.split('-')[0] === lastCard.split('-')[0] || cardName.split('-')[0] === 'J';
    }

    //-----------------------------------------------------------

    function computerPlayCard() {
        let cardName = null;
        playedCardCount++;
        console.log("Bilgisayarın oynadığı kart sayısı: ",playedCardCount);

        if (playedCardCount == 20) {
            document.querySelector('.close-cards img').style.visibility = 'hidden';
        }
        if (playedCardCount == 24) { setTimeout(() => {
            dealButton.style.display = 'block';

            if (middle.length > 0) {
                const remainingCards = middle.length;
    
                // Kalan kart sayısı tekse kullanıcıya, çiftse bilgisayara ekle
                if (remainingCards % 2 === 1) {
                        // Kartları kullanıcı toplar
                        addPointsForRemainingCards('user');
                        addCardsForRemainingCards('user', middle.slice()); // middle dizisini doğrudan aktarıyoruz
                        collectCards('user');
                        console.log("Kalan kartlar:", middle);


                    } else {
                         // Kartları bilgisayar toplar
                         addPointsForRemainingCards('computer');
                         addCardsForRemainingCards('computer', middle.slice()); // middle dizisini doğrudan aktarıyoruz
                         collectCards('computer');
                         console.log("Kalan kartlar:", middle);

                    }
            } 
            endGame();
            startNewGame();
        }, 1000); 
        }

        // Bilgisayarın elinde oynayabileceği bir kart olup olmadığını kontrol eder    
        for (let i = 0; i < computerHand.length; i++) {
            if (middle.length > 0 && (computerHand[i].split('-')[0] === middle[middle.length - 1].split('-')[0])) {
                cardName = computerHand.splice(i, 1)[0];
                break;
            }
        }
       // Eşleşen kart yoksa ve J kartı varsa, J kartını oynar (sadece yerde kart varsa veya J son kartsa)
    if (!cardName) {
        for (let i = 0; i < computerHand.length; i++) {
            const cardValue = computerHand[i].split('-')[0];
            if (cardValue === 'J') {
                if (middle.length > 0 || computerHand.length === 1) {
                    cardName = computerHand.splice(i, 1)[0];
                    break;
                }
            }
        }
    }

        // Eğer uygun bir kart yoksa, ilk kartı oynar    
        if (!cardName) {        
            cardName = computerHand.splice(0, 1)[0];
        }
    
        // Orta desteye oynanan kartı ekler    
        middle.push(cardName);
        renderMiddle();
        renderComputerHand(); // Bilgisayarın elindeki kartları güncelle

        // Eğer oynanan kart, kartları toplaması gerektiğini belirtiyorsa kartları toplar
        if (shouldCollectCards(cardName)) {
            collectCards('computer');
        }

        cardsPlayed++; // Oynanan kart sayısını arttır

        if (cardsPlayed % 8 === 0 && deck.length >= 8) { // 8 kart oynandıysa ve destede yeterli kart varsa
            dealCards();
        }
    }

    //-----------------------------------------------------------

    function renderComputerHand() {
        computerCards.forEach((card, index) => {
            // Eğer bilgisayarın elinde hala kart varsa
            if (index < computerHand.length) {
                card.querySelector('img').src = `images/cards/BACK.png`; // Kartın arka yüzünü göster
                card.classList.add('animate');
                card.dataset.cardName = computerHand[index]; // Kartın ismini veri setine ekle
                card.style.display = 'block'; // Kartı görünür yap
            } else {
                card.style.display = 'none'; // Kartı görünmez yap
                card.querySelector('img').src = ''; // Kartın resim kaynağını temizle
            }
        });
    }

    //-----------------------------------------------------------
    // orta kartların toplanması 
    function collectCards(player) {
        setTimeout(() => {
        // Oyuncunun koleksiyon alanını belirle
        const collection = player === 'user' ? userCollection : computerCollection;
        const offsetX = player === 'user' ? '400px' : '-400px'; // Kullanıcı sağa, bilgisayar sola
        const offsetY = player === 'user' ? '250px' : '-340px'; // Kullanıcı yukarı, bilgisayar aşağı

        // Kalan kartları console.log ile görüntüle
        console.log(`${player === 'user' ? 'Kullanıcı' : 'Bilgisayar'} kartları topluyor:`, middle);

        // Orta kartları dolaş ve her bir kartı oyuncunun koleksiyonuna ekle
        middle.forEach((cardName) => {    
            const card = document.createElement('div');
            card.classList.add('cards-middle', 'animate');
            card.style.transform = `translate(${offsetX}, ${offsetY})`; // Kartın konumunu ayarla
            const img = document.createElement('img');
            img.src = `images/cards/BACK.png`; // alınan kartlar 
            card.appendChild(img); // resmi karta ekle 
            collection.appendChild(card); //kartı oyuncunun koleksiyonuna ekle
            // Kart adını veri setine ekleyin
            card.dataset.cardName = cardName; // Burayı ekleyin
        });
        // Puan hesaplama
        calculateScore(player, middle); // Burada puan hesaplaması için middle dizisini geçiyoruz
        checkPisti(player); // pişti konrol
        middle = [];
        renderMiddle(); // Orta kartları güncelle
        const currentScore = calculateScore(player); // Skoru hesapla
        console.log(`${player === 'user' ? 'Kullanıcı' : 'Bilgisayar'} yeni puanı: ${currentScore}`);
    }, 500);
    }

    //-----------------------------------------------------------

    userCards.forEach(card => {

        // Her bir kullanıcı kartı için bir tıklama olayı dinleyici ekler
        card.addEventListener('click', () => {
            // Eğer tıklanan kart kullanıcının elindeki kartlardan biriyse
            if (userHand.includes(card.dataset.cardName)) {
                // Bu kartı kullanıcı tarafından oynanmış olarak işaretler
                userPlayCard(card);
            }
        });
    });
    //--------------------------------------------------------------------
// oyunu tekrardan başlatmak için 
function startNewGame() {
    userScore = 0;
    computerScore = 0;
    cardsPlayed = 0;
    playedCardCount = 0;

    score.computer = 0;
    pistiScores.computer = 0;
    score.user = 0;
    pistiScores.user = 0;

    updateScores();
    // Deste ve el kartlarını yeniden oluştur
    deck = generateDeck();
    userHand = [];
    computerHand = [];
    middle = [];

    // Kartları ve koleksiyonları temizle
    userCollection.innerHTML = ''; // Kullanıcı koleksiyonu temizle
    computerCollection.innerHTML = ''; // Bilgisayar koleksiyonu temizle
    renderMiddle(); // Orta kartları temizle

    dealButton.style.display = 'block'; // Butonu göster
    dealButton.disabled = false; // butonu kapatır
    document.querySelector('.close-cards img').style.display = 'block';  // görünür hale getirir
    document.querySelector('.close-cards img').style.visibility = 'visible'; // görünür hale getirir
    
}

// Skor hesaplama fonksiyonu
function calculateScore(player) {
    const collection = player === 'user' ? userCollection : computerCollection;
    const collectedCards = Array.from(collection.children);
    let currentScore = 0;
    // Eğer bu fonksiyon daha önce çağrılmadıysa
    if (player === 'user') {
        score.user = 0; // Yeni oyunda kullanıcı puanını sıfırla
    } else {
        score.computer = 0; // Yeni oyunda bilgisayar puanını sıfırla
    }

    collectedCards.forEach(card => {
        const cardName = card.dataset.cardName; // Kartın adını al

        // Puanlama kurallarına göre puan ekle
        if (cardName === '10-D') {
            score[player]  += 3;
            currentScore  += 3;
        } else if (cardName === '2-C') {
            score[player]  += 2;
            currentScore  += 2;
        } else if (['J-C', 'J-D', 'J-H', 'J-S', 'A-C', 'A-D', 'A-H', 'A-S'].includes(cardName)) {
            score[player]  += 1;
            currentScore  += 1;
        }
    });
    

    // 26'dan fazla kartı olan oyuncuya 3 puan ekle
    if (collectedCards.length > 26) {
        score[player]  += 3;
        currentScore  += 3;
    } else if (collectedCards.length === 26 && player === 'user') {
        console.log("Eşitlik: Her iki oyuncunun kart sayısı 26");
        return  score[player]; // 3 puan verilmeyecek
    }

    updateScores();
    return  score[player];
}

//-------------------------------------------------------------------------
// Oyun sona erdiğinde puanları hesapla
function endGame() {
    // Toplam puanları hesapla
    const userTotalScore = score.user + pistiScores.user;
    const computerTotalScore = score.computer + pistiScores.computer;

    console.log("kullanıcı php gönderilen veri",userTotalScore);
    console.log("bilgsayar php gönderilen veri",computerTotalScore);
    // Kazananı belirle
    let winner = '';
    if (userTotalScore > computerTotalScore) {
        winner = 'Kullanıcı Kazandı!';
    } else if (userTotalScore < computerTotalScore) {
        winner = 'Bilgisayar Kazandı!';
    } else {
        winner = 'Beraberlik!';
    }

    // Modal içeriğini güncelle
    document.getElementById('computerTotalScore').innerText = computerTotalScore;
    document.getElementById('userTotalScore').innerText = userTotalScore;
    document.getElementById('winnerMessage').innerText = winner;

    // Modal'ı göster
    document.getElementById('endGameModal').style.display = 'block';
    document.querySelector('.close-cards').classList.add('darken'); // Close cards kararıyor

     // Puanları PHP'ye gönder
     sendScoresToPHP(userTotalScore, computerTotalScore, winner);
}

// "Tamam" butonuna tıklanıldığında modal'ı kapat
document.getElementById('closeModalButton').onclick = function() {
    document.getElementById('endGameModal').style.display = 'none';
    document.querySelector('.close-cards').classList.remove('darken'); // Close cards eski haline dönüyor
};

// Modal dışına tıklanıldığında kapatma
window.onclick = function(event) {
    if (event.target === document.getElementById('endGameModal')) {
        document.getElementById('endGameModal').style.display = 'none';
        document.querySelector('.close-cards').classList.remove('darken'); // Close cards eski haline dönüyor
    }
};

//------------------------------------------------------------------------------
function checkPisti(player) {
    if (middle.length === 2) {
        let firstCard = middle[0].split('-')[0]; // Yerdeki ilk kartın değeri
        let secondCard = middle[1].split('-')[0]; // Oynanan kartın değeri

        // Aynı değerdeki kartlar (örneğin, 7-C ve 7-D) için 10 puan
        if (firstCard === secondCard && firstCard !== 'J') {
            pistiScores[player] += 10;
            console.log(`${player === 'user' ? 'Kullanıcı' : 'Bilgisayar'} pişti yaptı ve 10 puan kazandı!`);   
        }
        // İki J kartı için 20 puan
        else if (firstCard === 'J' && secondCard === 'J') {
            pistiScores[player] += 20;
            console.log(`${player === 'user' ? 'Kullanıcı' : 'Bilgisayar'} pişti yaptı ve 20 puan kazandı!`);     
        }
        // Puanı güncelle
        updateScores();
        console.log('Güncel Skorlar:', pistiScores);
    }
    
}
//------------------------------------------------------------------------------
function updateScores() {
    const computerScoreElement = document.getElementById('computerScore');
    const computerPistiScoreElement = document.getElementById('computerPistiScore');
    const userScoreElement = document.getElementById('userScore');
    const userPistiScoreElement = document.getElementById('userPistiScore');

    computerScoreElement.textContent = score.computer;
    computerPistiScoreElement.textContent = pistiScores.computer;
    userScoreElement.textContent = score.user;
    userPistiScoreElement.textContent = pistiScores.user;
   
}

function addPointsForRemainingCards(player) { // burada yerde kalan kartları kimin aldığına bakıp kimin kazandığı belirlenir
        let additionalPoints = 0;
    
        middle.forEach(card => {
            const cardValue = card.split('-')[0];
            // Puanlı kartları kontrol et
        if (cardValue === '10' && card.includes('D')) {
            additionalPoints += 3; // 10-D kartı 3 puan
        } else if (['A', 'J'].includes(cardValue)) {
            additionalPoints += 1; // Aslar ve J kartları 1 puan
        } else if (card === '2-C') {
            additionalPoints += 2; // 2-C kartı 2 puan
        }
     });
    
     // Puanları ilgili oyuncunun skoruna ekle
     score[player] += additionalPoints;
     console.log(`${player} kazandı ve ek puanlar alındı: ${additionalPoints}`);
    }


    function sendScoresToPHP(userScore, computerScore) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `game_scores.php?userScore=${userScore}&computerScore=${computerScore}`, true);
    xhr.send();
}

function addCardsForRemainingCards(player) {
    if (player === 'user') {
        console.log("Kullanıcı kart ekliyor:", middle);
        userHand = userHand.concat(middle);
    } else {
        console.log("Bilgisayar kart ekliyor:", middle);
        computerHand = computerHand.concat(middle);
    }
}
   
    
    
//----------SON--------------\\
});



