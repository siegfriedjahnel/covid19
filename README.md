# AppInfo

# Mein persönliches covid-19 Dashboard

![](https://github.com/siegfriedjahnel/covid19/blob/main/screen1.png)


Diese Web-App ist ein personalisiertes Dashbord für Covid19-Zahlen.
Angezeigt werden:
- alle Fälle
- neue Fälle (seit gestern)
- alle Toten
- neue Tote (seit gestern)
- 7-Tage-Inzidenz

Als Orte sind verfügber:
- Deutschland
- alle Bundesländer
- alle Landkreise
- alle Kreisstädte

Als Datenquelle dient das RKI, das eine offene REST-API zur Verfügung stellt.
Die gewählten Orte werden im "local-storage" im Browser gespeichert. 
Nach einem "clear-cache" sind die gespeicherten Orte wieder gelöscht und müssen ggf. wieder neu gesucht und gespeichert werden

Die App erfüllt alle Bedingungen für PWA und kann zum Startbildschirm hinzugefügt werden.

# Bedienung:
Die App besteht im wesentlichen aus 4 Komponenten:
- ein Eingabefeld
- ein Button zum hinzufügen von Orten
- meheren Buttons zu entfernen von Orten
- einer Ausgabe-Tabelle

Tippe in das Eingabefeld und eine Liste mit verfügbaren Orten sollte erscheinen. Tippe nocheinmal in das Eingabefeld und 
  die Tastatur sollte erscheinen. Beginne den gewünschten Ort einzugeben und die List wird kürzer. Wähle dann einen Vorschlag und tippe
  auf den "+"Button. Der Ort und die dazugehörigen Daten erscheinen in der Ausgabe-Tabelle.
  
  Wenn du auf den "-"Button klickst, wird der zugehörige Ort wieder entfernt.
  
![](https://github.com/siegfriedjahnel/covid19/blob/main/images/illu2.png)

![](https://github.com/siegfriedjahnel/covid19/blob/main/images/screen-2.png)

![](https://github.com/siegfriedjahnel/covid19/blob/main/images/screen-3.png)

![](https://github.com/siegfriedjahnel/covid19/blob/main/images/screen-4.png)



