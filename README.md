# Coders Camp 2021 (edycja 7) | Projekt zespołowy | JavaScript

## Zespół projektowy oraz rola w projekcie
---
Zespół pracował w ramach 7 edycji kursu CodersCamp. Aplikacja została   wykonana przez uczestników kursu pod okiem mentora.

Mentor: [Jędrzej Ratajczak](https://github.com/Nilphym)

Uczestnicy:

* [Agnieszka Liszka](https://github.com/AgnieszkaLiszka) (_project manager_)
* [Filip Kostecki](https://github.com/kostnerek)
* [Krzysztof Gumularz](https://github.com/KrisGum) (_project owner_)
* [Marcin Kukułka](https://github.com/MarcinKukulka)
* [Przemysłam Gajowczyk](https://github.com/Przemyslaw-G)
  
## Jobiz (The IT Quiz)  
---
[Mockup i prototyp](https://www.figma.com/file/dANGGckBg5F1XQRahimBSl/JOBIZ1?node-id=0%3A1)


### Demo 
  \
Wersja demostracyjna aplikacji jest dostępna [TUTAJ](https://coderscampcrew.github.io/Jobiz/)

Wejdź i sprawdź swoją wiedzę z zakresu technologi webowych.

### Cel projektu 
  \
Celem naszego projektu było dostarczenie aplikacji edukacyjnej mającej formę quizu i pozwalającej na sprawdzenie swojej wiedzy z zakresu technologii używanych w pracy jako frontend lub backend developer. 

### Działanie aplikacji
  \
Aplikację można podzielić na trzy etapy:

- Etap I - w którym gracz proszony jest o okreslenie szeregu ustawień rozgrywki, takich jak:
  \
 wybór technologii (ścieżka frontend lub backend)
   \
 wybór poziomu trudności (intern, junior, regular, senior)  
 podanie własnych inicjałów

- Etap II - właściwy quiz polegający na odpowiadaniu na czas na pytania z wybranego przez gracza zakresu,
quiz został zaprojektowany jako zestaw 10 losowych pytań z jedną prawidłową odpowiedzią, którą należy zaznaczyć
przed końcem odliczanego czasu
 
- Etap III - podanie osiągniętego wyniku i jego pozycji na liście rankingowej

### Zasady gry i scenariusz rozgrywki
  \
Po podaniu podstawowych parametrów rozgrywki gracz przystępuje do jej zasadniczej cześci czyli quizu.
Po wyświetleniu pytania, gracz ma dwie możliwość: potwierdzić przyciskiem "I have read", że zapoznał się z treścią pytania i przejść do udzielenia na nie odpowiedzi lub nacisnąć przyciśk "Skip" i przejść do następnego pytania. W przypadku podania błędnej odpowiedzi, nie udzieleniu jej w określonym czasie lub pominięciu pytania gracz traci jedno życie. Ich ilość reprezentowana jest przez ikone serduszka w lewym górnym rogu okna przeglądarki. Scenariusz powtarzany jest dla każdego pytania. Postęp quizu prezentowany jest przez pasek postępu usytuowany na dole okna przeglądarki. 


### Dodatkowe informacje
  \
Aplikację zaprojektowano tak aby spełnic określone wymagania kursu poprzez zastosowanie konkretnych technologii, standarów oraz konwencji powszechnie stosowanych w procesie wytwarzania tego rodzaju produktów. W procesie developmentu zastosowano elementy metodyki SCRUM. Aplikacja posiada zarówno wersję desktopową jak i responsywną dostosowaną do tabletów i telefonów.   

### Wykorzystane technologie
  \
W trakcie developmentu wykorzystaliśmy:

* Miro, do wykonania koncepcji projektu 
* Figma, do wykonania mockup'u i dopracowania projektu
* GitHub, do równoległej pracy z kodem oraz zarządzania projektem
* HTML, do definiowania struktury aplikacji
* CSS, do stylowania aplikacji (przyjęto metodologię BEM)
* JavaScript, do wykonania logiki aplikacji oraz elementów interaktywnych interfejsu
* Web API dla JavaScript  ( _[https://quizapi.io/](https://quizapi.io/)_ )
* Fetch API do łączna z Web APi
* LocalStorage, do przechowywania ustawień gry oraz najlepszych wyników
* Snowpack, do budowy aplikacji i zarządzania zależnościami
* Prettier, do automatycznego formatowania kodu

Dodatkowo w celu wykonania hostingu posłużyliśmy się github pages oraz skryptem budującym projekt i wykonującym jego deploy z wykorzystaniem odpowiednich bibliotek.

### Uruchomienie aplikacji

Przed uruchomieniem aplikacji należy:

1. Zainstalować zależności za pomocą komendy: <code>npm install</code>
2. Zainstalować zależności za pomocą komendy: <code>npm start</code>

Aplikacja będzie dostępna pod adresem: _localhost:3000/index.html_

Kod produkcyjny aplikacji umieszczamy w katalogu <code>src</code>

#
