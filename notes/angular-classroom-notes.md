# Założenia

## Etap I

Przechowywanie danych - kontaktów o osobach (mogą to być później uczestnicy ale także i prowadzący kursy):

- wyświetlanie listy wszystkich kontaktów
- wyświetlanie szczegółów kontaktu
- dodawanie kontaktu
- edycja kontaktu
- usuwanie kontaktu

Bez wymyślnego stylowania - użycie Bootstrap 4. (później)

## Etap II

Przechowywanie danych o kursach

- wyświetlanie listy wszystkich kursów
- wyświetlanie szczegółów kursu
- dodawanie kursu
- edycja kursu
- usuwanie kursu
- możliwość przypisywania uczestników
- możliwość przypisywania prowadzących

### Używane:

angular, eslint, prettier, uuid



# Realizacja - etap I

## Dodanie route contacts wyświetlającej komponent contacts a w nim komponent contacts-list

Wyczyszczenie projektu z zawartości początkowej

## Dodanie podstawowego modelu dla kontaktu

## Wyświetlanie listy kontaktów i wybór kontaktu do wyświetlenia

Dodanie serwisu contacts i przeniesienie do niego listy kontaktów. Dodanie do serwisu metody pobierania wszystkich kontaktów oraz pojedynczego na podstawie id.

## Formularz dodawania nowego kontaktu

Dodanie komponentu contact-edit z formularzem.

"Powiadomianie" komponentu contact-edit, że zmieniła się lista kontaktów.

Dodać formularz

## Walidatory do formularza dodawania nowego kontaktu

## Formularz edycji istniejącego kontaktu

## Poprawna obsługa, gdy nie ma kontaktu o zadanym id

Dodanie osobnego komponentu dla contact not found

## Usuwanie kontaktu

# Realizacja - etap II

## Dodanie komponentów courses, courses-list, header

## Dodanie route dla listy kursów

Oraz przycisków w headerze do przełączania się pomiędzy kursami a kontaktami

## Wyświetlanie listy kursów

Dodanie modelu course. Dodanie serwisu courses.

## Obsługa kursu, gdy nie ma o takim id

## Dodawanie nowego kursu

## Edycja istniejącego kursu

## Usuwanie kursu

## Wyświetlanie listy przypisanych uczniów

Wyświetlanie uczniów nie jako id tylko ich imiona i nazwiska.

Uaktualnienie nauczycieli i uczniów przy zmianie wybranego kursu.

## Dodawanie uczniów do kursu

Refaktor i naprawienie błędu. 

Ukrycie komponentu course-signin po dodaniu kontaktu (redirect) i dodanie pytania potwierdzającego

## Zapobieganie ponownemu dodaniu kontaktu jako ucznia/nauczyciela

## Komunikat, że już jest w nauczycielach/uczniach lub że nie udało się

Modal (snack-bar ?)