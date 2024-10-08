/* cSpell:disable */

const Catalog = [
    {
        id: 1,
        title: "Sony PlayStation 5 Digital Edition - 1000 ГБ SSD, с беспроводным контроллером, без дисковода",
        price: 449.12,
        old_price: 685.99,
        description: "Sony PlayStation 5 – долгожданная модель среди миллионов геймеров. Игровая приставка кардинально отличается от предыдущих и имеет невероятное количество достоинств, благодаря которым вы получите удивительные ощущения от игрового процесса.",
        category: "gaming_electronics",
        image: "Playstation_5.png",
        rating: {
            rate: 4.9,
            count: "52,677"
        }
    },
    {
        id: 2,
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version",
        price: 349.99,
        description: "Игры, созданные с использованием комплекта разработки Xbox Series X|S, демонстрируют непревзойдённое время загрузки и графику.",
        category: "gaming_electronics",
        image: "Xbox_Series_S_512GB_SSD.png",
        rating: {
            rate: 4.6,
            count: "42,581"
        }
    },
    {
        id: 3,
        title: "Мужская хлопковая куртка",
        price: 55.99,
        description: "Отличная верхняя одежда для весны, осени и зимы, подходящая для множества ситуаций: работа, походы, кемпинг, скалолазание, велосипедные прогулки, путешествия и другие активные виды отдыха. Прекрасный выбор подарка для вас или ваших близких. Теплая забота для отца, мужа или сына на День благодарения или Рождество.",
        category: "men's clothing",
        image: "Mens_cotton_jacket.png",
        rating: {
            rate: 4.7,
            count: 500
        }
    },
    {
        id: 4,
        title: "Мужская повседневная одежда с облегающим кроем",
        price: 15.99,
        description: "Цвет может немного отличаться на экране и в реальности. Пожалуйста, обратите внимание, что телосложение у всех разное, поэтому внимательно ознакомьтесь с информацией о размерах ниже в описании товара.",
        category: "men's clothing",
        image: "Mens_Slim_Fit_Casual_Wear.png",
        rating: {
            rate: 2.1,
            count: 430
        }
    },
    {
        id: 5,
        title: "Женский браслет John Hardy из коллекции Legends Naga с драконами из золота и серебра",
        price: 695,
        description: "Из нашей коллекции Legends, браслет Naga вдохновлен мифическим водным драконом, охраняющим жемчужину океана. Носите дракона внутрь для получения любви и изобилия, а наружу — для защиты.",
        category: "jewelry",
        image: "Womens_John_Hardy_bracelet.png",
        rating: {
            rate: 4.6,
            count: 400
        }
    },
    {
        id: 6,
        title: "Миниатюрное кольцо с микропаве из чистого золота",
        price: 168,
        description: "Гарантия удовлетворенности. Возврат или обмен любого заказа в течение 30 дней. Разработано и продается Hafeez Center в США. Гарантия удовлетворенности. Возврат или обмен любого заказа в течение 30 дней.",
        category: "jewelry",
        image: "Miniature_ring_with_micropave_in_pure_gold.png",
        rating: {
            rate: 3.9,
            count: 70
        }
    },
    {
        id: 7,
        title: "Классическое кольцо с принцессой, покрытое белым золотом",
        price: 9.99,
        description: "Классическое кольцо для помолвки или свадьбы с бриллиантом для нее. Подарки, чтобы побаловать любимую на помолвку, свадьбу, годовщину, День святого Валентина...",
        category: "jewelry",
        image: "Classic_princess_ring_white_gold_plated.png",
        rating: {
            rate: 3,
            count: 400
        }
    },
    {
        id: 8,
        title: "Серьги Pierced Owl из розового золота с двойным расширяющимся туннелем из нержавеющей стали",
        price: 10.99,
        description: "Серьги с двойным расширяющимся туннелем, покрытые розовым золотом. Изготовлены из нержавеющей стали марки 316L.",
        category: "jewelry",
        image: "Pierced_Owl_Earrings.png",
        rating: {
            rate: 1.9,
            count: 100
        }
    },
    {
        id: 9,
        title: "WD 2TB Elements портативный внешний жесткий диск - USB 3.0",
        price: 64,
        description: "Совместимость с USB 3.0 и USB 2.0. Быстрая передача данных. Улучшение производительности ПК. Большая емкость. Форматирован в NTFS для Windows 10, Windows 8.1, Windows 7. Может потребоваться повторное форматирование для других операционных систем. Совместимость может зависеть от конфигурации оборудования и операционной системы пользователя.",
        category: "electronics",
        image: "WD_2TB_Elements_portable_external_hard_drive.png",
        rating: {
            rate: 3.3,
            count: 203
        }
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Внутренний SSD - SATA III 6 Гб/с",
        price: 109,
        description: "Простое обновление для более быстрого запуска, завершения работы, загрузки приложений и отклика (по сравнению с жестким диском SATA 2,5” с 5400 об/мин; на основе опубликованных спецификаций и внутренних тестов с использованием PCMark Vantage) Улучшенная производительность записи, идеально подходящая для типичных рабочих нагрузок ПК. Идеальный баланс производительности и надёжности. Скорость чтения/записи до 535МБ/с/450МБ/с (на основе внутренних тестов; производительность может варьироваться в зависимости от объёма диска, устройства хоста, операционной системы и приложения).",
        category: "electronics",
        image: "SanDisk_SSD_PLUS_1TB_Internal_SSD.png",
        rating: {
            rate: 2.9,
            count: 470
        }
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Кэширование для улучшения производительности SATA III 2.5",
        price: 109,
        description: "3D NAND флеш-память для обеспечения высокой скорости передачи данных. Замечательная скорость передачи данных, которая позволяет ускорить загрузку и повысить общую производительность системы. Продвинутая технология кэширования SLC позволяет улучшить производительность и увеличить срок службы. Тонкий дизайн 7 мм подходит для ультрабуков и ультратонких ноутбуков. Поддержка команд TRIM, технологии очистки мусора, RAID и ECC (проверка и исправление ошибок) для оптимальной производительности и повышенной надёжности.",
        category: "electronics",
        image: "Silicon_Power_256GB_SSD_3D_NAND_A55_SLC.png",
        rating: {
            rate: 4.8,
            count: 319
        }
    },
    {
        id: 12,
        title: "WD 4TB Игровой диск совместимый с PlayStation 4 Внешний портативный жесткий диск",
        price: 114,
        description: "Расширьте возможности своей PS4, играйте в любом месте. Быстрая и простая установка. Стильный дизайн с большим объёмом памяти, ограниченная гарантия производителя на 3 года.",
        category: "electronics",
        image: "WD_4TB_Game_disc_compatible_with_PlayStation_4.png",
        rating: {
            rate: 4.8,
            count: 400
        }
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21,5 дюйма Full HD (1920 x 1080) IPS ультратонкий",
        price: 599,
        description: "21,5-дюймовый Full HD (1920 x 1080) широкоформатный IPS дисплей и технология Radeon FreeSync. Нет совместимости с креплением VESA. Частота обновления: 75 Гц при использовании порта HDMI. Дизайн без рамки | ультратонкий | время отклика 4 мс | IPS панель. Соотношение сторон 16:9. Поддержка 16,7 миллионов цветов. Яркость 250 нит. Угол наклона от -5 до 15 градусов. Горизонтальный угол обзора - 178 градусов. Вертикальный угол обзора - 178 градусов. Частота 75 Гц.",
        category: "electronics",
        image: "Acer_SB220Q_bi_21.5_inches_Full_HD.png",
        rating: {
            rate: 2.9,
            count: 250
        }
    },
    {
        id: 14,
        title: "Samsung 49-дюймовый CHG90 144 Гц изогнутый игровой монитор (LC49HG90DMNXZA) – Супер ультраширокий экран QLED",
        price: 999.99,
        description: "49-ДЮЙМОВЫЙ СУПЕР УЛЬТРАШИРОКИЙ ИЗОГНУТЫЙ ИГРОВОЙ МОНИТОР с двумя 27-дюймовыми экранами бок о бок. Технология Quantum Dot (QLED), поддержка HDR и заводская калибровка обеспечивают невероятно реалистичные и точные цвета и контраст. ЧАСТОТА ОБНОВЛЕНИЯ 144 Гц и сверхбыстрое время отклика 1 мс устраняют размытие в движении, искажения и уменьшают задержку ввода.",
        category: "electronics",
        image: "Samsung_49_CHG90_144Hz_Curved_Gaming_Monitor.png",
        rating: {
            rate: 2.2,
            count: 140
        }
    },
    {
        id: 15,
        title: "BIYLACLESEN Женская 3-в-1 Сноубордическая куртка, зимнее пальто",
        price: 56.99,
        description: "Примечание: куртки соответствуют стандартному размеру США. Пожалуйста, выбирайте размер, как обычно. Материал: 100% полиэстер; съёмная внутренняя подкладка: тёплый флис. Функциональная съёмная подкладка: приятная для кожи, лёгкая и тёплая. Внутреннее пальто с высоким воротником, сохраняет тепло в холодную погоду. Карманы на молнии: 2 кармана для рук на молнии, 2 кармана на груди на молнии (достаточно для хранения карт или ключей) и 1 потайной карман внутри. Карманы на молнии и потайной карман сохранят ваши вещи в безопасности. Удобный дизайн: регулируемый и съёмный капюшон и регулируемые манжеты для защиты от ветра и воды, для комфортной посадки. Дизайн 3-в-1 предлагает больше удобства: можно носить пальто и подкладку вместе или по отдельности в зависимости от сезона и климата.",
        category: "women's clothing",
        image: "BIYLACLESEN_Womens_Snowboard_Jacket.png",
        rating: {
            rate: 2.6,
            count: 235
        }
    },
    {
        id: 16,
        title: "Lock and Love Женская кожаная куртка байкер с отстёгивающимся капюшоном из искусственной кожи",
        price: 29.95,
        description: "100% ПОЛИУРЕТАН (внешний слой), 100% ПОЛИЭСТЕР (подкладка), 75% ПОЛИЭСТЕР, 25% ХЛОПОК (свитер). Материал из искусственной кожи для стиля и комфорта. 2 передних кармана. Куртка из искусственной кожи с джинсовым стилем и отстёгивающимся капюшоном. Кнопка на талии и детализированные швы по бокам. Только ручная стирка, не отбеливать, сушить на верёвке, не гладить.",
        category: "women's clothing",
        image: "Lock_and_Love_Womens_Leather_Biker_Jacket.png",
        rating: {
            rate: 2.9,
            count: 340
        }
    },
    {
        id: 17,
        title: "Женская дождевка, ветровка с полосками для восхождений",
        price: 39.99,
        description: "Лёгкая, идеально подходит для путешествий или повседневной носки — длинные рукава с капюшоном, регулируемая талия с завязками. Дождевик с застёжкой на молнии и кнопках, полностью с подкладкой в полоску. У дождевика есть 2 боковых кармана, достаточные по размеру для хранения разных вещей. Он прикрывает бёдра, а капюшон достаточно большой, но не чрезмерный. Пришитый капюшон с подкладкой из хлопка и регулируемыми завязками придаёт стильный вид.",
        category: "women's clothing",
        image: "Womens_rain_jacket_windbreaker_with_stripes_for_climbing.png",
        rating: {
            rate: 3.8,
            count: 679
        }
    },
    {
        id: 18,
        title: "Женская футболка с короткими рукавами и вырезом-лодочкой",
        price: 9.85,
        description: "95% ВИСКОЗА, 5% СПАНДЕКС, сделано в США или импортировано. Не отбеливать. Лёгкая ткань с отличной эластичностью для комфорта. Ребристые рукава и вырез, двойные швы по нижнему краю.",
        category: "women's clothing",
        image: "Womens_Short_Sleeve_Boat_Neck_T-Shirt.png",
        rating: {
            rate: 4.7,
            count: 130
        }
    },
    {
        id: 19,
        title: "Opna Женская футболка с короткими рукавами и влагоотводящей тканью",
        price: 7.95,
        description: "100% полиэстер, машинная стирка. 100% катионический полиэстер интерлок. Машинная стирка и предварительная усадка для отличной посадки. Лёгкая, просторная и очень дышащая с влагоотводящей тканью, которая помогает отводить влагу. Мягкая лёгкая ткань с удобным воротником V-образной формы и более стройным силуэтом для дополнительного комфорта.",
        category: "women's clothing",
        image: "Opna_Womens_Short_Sleeve_T-Shirt_with_Moisture-wicking_Fabric.png",
        rating: {
            rate: 4.5,
            count: 146
        }
    },
    {
        id: 20,
        title: "DANVOUY Женская футболка с короткими рукавами и V-образным вырезом",
        price: 12.99,
        description: "95% хлопок, 5% спандекс. Особенности: повседневная футболка с короткими рукавами, принтом, V-образным вырезом. Модные футболки. Ткань мягкая и эластичная. Случаи: повседневная носка, офис, пляж, школа, дом, улица. Сезон: весна, лето, осень, зима.",
        category: "women's clothing",
        image: "DANVOUY_Womens_Short_Sleeve_V-Neck_T-Shirt.png",
        rating: {
            rate: 3.6,
            count: 145
        }
    },
    {
        id: 21,
        title: "Fjallraven - Рюкзак Foldsack No. 1, подходит для 15-дюймовых ноутбуков",
        price: 109.95,
        description: "Идеальный рюкзак для повседневного использования и прогулок по лесу. Уложите свой ноутбук (до 15 дюймов) в мягкий карман, а также всё необходимое для повседневной жизни.",
        category: "men's clothing",
        image: "Fjallraven_Backpack_Foldsack_No_1.png",
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 22,
        title: "Мужские повседневные премиум-футболки с облегающим кроем",
        price: 22.3,
        description: "Облегающий стиль, контрастные реглан-рукава, застежка Henley с тремя пуговицами, легкая и мягкая ткань для комфортного и дышащего ношения. Прочные футболки с круглым вырезом, подходящие для повседневной моды и фанатов бейсбола. Стиль Henley включает круглую горловину с тремя пуговицами.",
        category: "men's clothing",
        image: "Mens_Casual_Premium_Slim_Fit_T-Shirts.png",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
]

export default Catalog