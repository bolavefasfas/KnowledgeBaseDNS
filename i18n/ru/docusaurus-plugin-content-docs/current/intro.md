---
title: Обзор
sidebar_position: 1
slug: /
---

## Что такое DNS

DNS расшифровывается как «‎Domain name system» или «‎Система доменных имён». Её цель — переводить имена доменов в IP-адреса. Каждый раз, когда вы заходите на сайт, ваш браузер отправляет запрос на DNS-сервер, чтобы определить IP-адрес сайта. В ответ обычный DNS-резолвер просто возвращает IP-адрес запрошенного домена.

> DNS-сервер по умолчанию обычно предоставляется вашим интернет-провайдером. Это означает, что ваш интернет-провайдер может отслеживать ваши действия в сети и продавать логи третьим лицам.

![Ваше устройство всегда использует DNS-сервер, чтобы получить IP-адрес доменного имени, к которому обращается приложение](https://cdn.adguard.com/content/blog/articles/dns-cbs/scr1.png)

Есть и DNS-серверы, которые блокируют сайты на уровне DNS. Как они работают? Когда ваше устройство отправляет «плохой» запрос, будь то реклама или трекер, DNS-сервер предотвращает соединение, отвечая немаршрутизируемым IP-адресом заблокированного домена.

## Зачем использовать DNS для блокировки контента

Сегодня к интернету подключено абсолютно всё — от телевизора до умных лампочек, от мобильных устройств до умных автомобилей. А где есть интернет, есть реклама и трекеры. Одного только браузерного блокировщика недостаточно. Чтобы усилить защиту, используйте DNS в сочетании с VPN и блокировщиком рекламы.

DNS-блокировка контента имеет как преимущества, так и очевидные недостатки. С одной стороны, у DNS нет слепых зон, поскольку он наблюдает за всеми устройствами, а не только за браузерами. Но, с другой стороны, в DNS-блокировке нет косметической фильтрации.

## Что такое AdGuard DNS

AdGuard DNS — это DNS-сервис, который заботится о вашей конфиденциальности и безопасности в интернете. Он поддерживает такие надёжные протоколы шифрования, как DNS-over-HTTPS, DNS-over-TLS и DNS-over-QUIC. Он может работать как обычный DNS-резолвер в Нефильтрующем режиме, но может и блокировать контент на уровне DNS: определять запросы к рекламным, отслеживающим доменам и/или доменам со «взрослым» контентом (опционально) и возвращать им пустой ответ. У AdGuard есть собственная база доменных имён, обслуживающих рекламу, трекеры и мошеннические активности, и она регулярно обновляется.

![Примерная схема того, как работает AdGuard DNS](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> Около 75% трафика AdGuard DNS шифруется. Именно это отличает DNS-серверы, блокирующие контент, от других. Если вы посмотрите на статистику CloudFlare или Quad9, то увидите, что зашифрованный DNS-трафик составляет лишь небольшую долю всех запросов.

AdGuard DNS существует в двух основных формах: [публичный AdGuard DNS](public-dns/overview.md) и [приватный AdGuard DNS](private-dns/overview.md). Оба сервиса не требуют установки приложений. Их легко настроить и использовать, и они обеспечивают пользователей минимумом функций, необходимых для блкоировки рекламы, трекеров, вредоносных сайтов и контента для взрослых (если потребуется). Нет никаких ограничений на то, с какими устройствами их можно использовать.

Несмотря на множество совпадений, приватный AdGuard DNS и публичный AdGuard DNS — это два разных сервиса. Главное отличие в том, что приватный AdGuard DNS можно настроить, а публичный — нет.

## Модуль DNS-фильтрации в продуктах AdGuard

Во всех крупных продуктах AdGuard, включая AdGuard VPN, есть **модуль DNS-фильтрации**, где можно выбрать DNS-сервер от провайдера, которому вы доверяете. Конечно, в списке есть серверы AdGuard DNS — По умолчанию, Нефильтрующий и Семейная защита. Приложения AdGuard позволяют пользователям [легко настраивать и пользоваться AdGuard DNS](https://adguard-dns.io/en/public-dns.html) — публичным и приватным.







