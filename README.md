# Synvio V18 — marketing

Ta paczka trafia do repo **strony marketingowej**, nie aplikacji. Usuń stary Book a pilot przez zastąpienie plików paczką i wykonaj deployment.

Najpierw wdroż aplikację z `Synvio_V18_Flow.zip`, zgodnie z jej `DEPLOY_FLOW.md`. Aby uruchomić prawdziwego asystenta na stronie, opublikuj bota z dozwoloną domeną `https://synviocore.xyz`, ustaw jego publiczny UUID jako `FLOW_MARKETING_BOT_ID` w Vercelu aplikacji i wykonaj redeploy. Kluczy API nie dodawaj do plików marketingu.

Domyślny adres aplikacji jest zapisany w `flow-site.js`: `https://flow.synviocore.xyz`. Zmiana domeny wymaga aktualizacji tego adresu i linków strony. Bez skonfigurowanego bota widoczny jest link do edytora, nie pozorowana rozmowa AI.

Statyczna strona bez kroku budowania. Wgraj zawartość paczki, zachowując pliki w katalogu głównym projektu.

