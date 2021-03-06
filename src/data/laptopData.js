const laptopData = [
  {
    desc: `2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey`,
    brand: `Apple`,
    image: "./images/laptops/prod1.jpg",
    price: 179990,
    ratings: 322,
    features: [
      `Ninth-generation 6-core Intel Core i7 processor`,
      `Stunning 40.65cm (16-inch) Retina display with True Tone technology`,
      `Touch Bar and Touch ID`,
      `AMD Radeon Pro 5300M graphics with GDDR6 memory`,
      `Ultrafast SSD`,
      `Intel UHD Graphics 630`,
      `Six-speaker system with force-cancelling woofers`,
      `Four Thunderbolt 3 (USB-C) ports`,
      `Up to 11 hours of battery life`,
      `802.11ac Wi-Fi`,
    ],
  },
  {
    desc: `Lenovo IdeaPad Flex 5 11th Gen Intel Core i7 14"(35.56cm) FHD IPS 2-in-1 Touchscreen Laptop(16GB/512GB SSD/Windows 10/MS Office/Lenovo Digital Pen/Fingerprint Reader/Graphite Grey/1.5Kg), 82HS0092IN`,
    brand: `Lenovo`,
    image: "./images/laptops/prod2.jpg",
    price: 89990,
    ratings: 50,
    features: [
      `Processor: 11th Gen Intel Core i7-1165G7 | Speed: 2.8 GHz (Base) - 4.7 GHz (Max) | 4 Cores | 12MB Cache`,
      `OS: Pre-Loaded Windows 10 Home with Lifetime Validity`,
      `Pre-Installed: MS Office Home and Student 2019`,
      `Memory and Storage: 16GB RAM DDR4-3200 | 512 GB SSD`,
      `Graphics: Intel Iris Xe Integrated Graphics`,
      `Display: 14" Full HD (1920x1080) | Brightness: 250 nits | Glossy | IPS Technology | 45% NTSC`,
      `Design: Touchscreen | 1.79 cm Thin and 1.5 kg Light | 4-sided Narrow Bezels | Backlit Keyboard | Fingerprint Reader`,
      `Battery Life: 7 Hours | 52.5Wh Battery | Quick Charge (Up to 80% in 1 Hour)`,
      `Camera (Built in): HD 720p Camera | Fixed Focus | Privacy Shutter | Integrated Dual Array Microphone`,
      `Audio: 2 x 2W Stereo Speakers | HD Audio | Dolby Audio`,
      `Connectivity: WiFi 5 (11ac, 2x2) | Bluetooth 5.0`,
      `Ports: 2 USB 3.1 Gen 1, 1 USB 3.1 Type-C Gen 1 (support data transfer and Power Delivery), Headphone/Mic combo jack, HDMI 1.4b, 4-in-1 media reader (MMC, SD, SDHC, SDXC)`,
      `In the box: Laptop, Lenovo Digital Pen Stylus, Power Adapter and User Manual`,
      `Warranty: This genuine Lenovo laptop comes with 1 year Onsite Manufacturer Warranty with Accidental Damage Protection and 24/7 Premium Care`,
    ],
  },
  {
    desc: `ASUS TUF Dash F15 (2021) 15.6" (39.62 cm) FHD 240Hz/3ms, Intel Core i7-11370H, GeForce RTX 3060 6GB Graphics, Gaming Laptop (16GB RAM/1TB SSD/Office 2019/Windows 10 Home/Gray/2 Kg) FX516PM-AZ153TS`,
    brand: `Asus`,
    image: "./images/laptops/prod3.jpg",
    price: 128990,
    rating: 57,
    features: [
      `Processor: 11th Gen Intel Core i7-11370H, 4 cores , 8 Threads, 12M Cache, 3.3 GHz Base Speed, Up to 4.8GHz Turbo Boost Speed`,
      `Access to over 100 high-quality PC games on Windows 10`,
      `One-month subscription to Xbox Game Pass that???s included with the purchase of your device`,
      `Memory & Storage: 16GB (8GB onboard + 8GB SO-DIMM) DDR4-3200MHz RAM, Upgradeable Up to 24GB Using 1x SO-DIMM | Storage: 1TB SSD M.2 NVMe PCIe 3.0 with Additional M.2 Slot`,
      `Graphics: Dedicated NVIDIA GeForce RTX 3060 GDDR6 6GB VRAM, With ROG Boost Up to 1525MHz at 80W + 85W with Dynamic Boost`,
      `Display: 15.6-inch, FHD (1920 x 1080) 16:9 300nits, IPS-level, Refresh Rate: 240Hz/3ms, Anti-Glare display, sRGB: 100%, Adobe: 75.35%, with Adaptive-Sync`,
      `Operating System: Pre-loaded Windows 10 Home with lifetime validity | Software Included: Pre-installed Office Home and Student 2019 with Lifetime validity`,
      `Cooling: 4 Fan outlets | 83-Blade Fans | Self-Cleaning Cooling | 5 Heatpipes CPU/GPU/VRM/VRAM`,
      `I/O Port: 1x RJ45 LAN port | 1x USB 4 Type C Thunderbolt 4 with Power Delivery and Display Port 1.4 Support | 3x USB 3.2 Gen 1 Type-A| 1x 3.5mm Combo Audio Jack | 1x HDMI 2.0b`,
      `Other: Backlit Keyboard | 1.7mm Key Travel | Wi-Fi 6(802.11ax)+Bluetooth 5.1 (Dual band) 2*2 | 2x 2W speaker | Built-in array microphone | No Webcam | MIL-STD-810H standard Durability`,
    ],
  },
  {
    desc: `ASUS ZenBook Duo 14 (2021), 14" (35.56 cms) FHD Dual-Screen Touch Laptop (16GB/1TB SSD/2GB GeForce MX450 GPU/Office 2019/Windows 10/Celestial Blue/1.62 Kg), UX482EG-KA711TS`,
    brand: `Asus`,
    image: "./images/laptops/prod4.jpg",
    price: 134990,
    ratings: 44,
    features: [
      `Processor: 11th Gen Intel Core i7-1165G7, 12MB Cache, 2.8 GHz Base Speed, Up to 4.7 GHz Turbo Boost Speed, 4 cores, 8 Threads`,
      `Memory & Storage: 16GB LPDDR4X onboard 4266MHz RAM with | Storage: 1TB SSD M.2 NVMe PCIe 3.0`,
      `Graphics: Dedicated NVIDIA GeForce MX450 GDDR6 2GB VRAM`,
      `Display: Touch screen, 14.0-inch, FHD (1920 x 1080) 16:9, IPS-level Panel, Anti-glare display, LED Backlit, 400nits, sRGB: 100%, Pantone Validated, Screen-to-body ratio: 93 %, With stylus support`,
      `Additional Display: ScreenPad Plus (12.65" FHD 1920 x 515, Touch screen IPS-level Panel Support Stylus)`,
      `Software Included: Pre-Install MS Office Home and Student 2019 with lifetime validity, McAfee With 1 year validity | Operating System: Pre-loaded Windows 10 Home with lifetime validity`,
      `Design & battery: NanoEdge bezels | Mangnesium-Aluminum Chassis and Lid | Thin and Light Laptop | Laptop weight: 1.62 kg | 70WHrs, 4-cell lithium-polymer battery | Up to 17 Hours battery life ;Note: Battery life depends on conditions of usage`,
      `Keyboard & Touchpad: Backlit Chiclet Keyboard | 1.4mm Key-travel | Precision Touchpad`,
      `I/O Port: 1x USB 3.2 Gen 1 Type-A, 2x Thunderbolt 4 supports display / power delivery, 1x HDMI 1.4, 1x 3.5mm Combo Audio Jack, 1x Micro SD card reader`,
      `Other: HD IR Webcam with Facial recognition Login support | Wi-Fi 6(802.11ax)+Bluetooth 5.0 (Dual band) 2*2 | Built-in speaker | Smart Amp Technology | Built-in array microphone | MIL-STD-810H standard Durability
      `,
    ],
  },
  {
    desc: `HP Pavilion (2021) Thin & Light 11th Gen Core i7 Laptop, 16 GB RAM, 1TB SSD, Iris Xe Graphics, 14" (35.56cms) FHD Screen, Windows 10, MS Office, Backlit Keyboard (14-dv0058TU)`,
    brand: `HP`,
    image: "./images/laptops/prod5.jpg",
    price: 84390,
    ratings: 209,
    features: [
      `Processor: 11th Gen Intel Core i7-1165G7 (up to 4.7 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 4 cores)`,
      `Operating System & Software: Pre-loaded Windows 10 Home with lifetime validity| Microsoft Office Home & Office 2019, Alexa Built-in`,
      `Display: 15.6-inch FHD (1920x1080) IPS Anti-Glare Panel with 45% NTSC, 250 nits, 157ppi`,
      `Memory & Storage: 16GB DDR4-3200 SDRAM (2x8 GB) | 1TB PCIe NVMe M.2 SSD`,
      `Graphics: Intel Iris Xe Graphics`,
    ],
  },
  {
    desc: `Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" (39.63cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 10/MS Office/Backlit Keyboard/Fingerprint Reader/Graphite Grey/1.66Kg), 82FG0125IN`,
    brand: `Lenovo`,
    image: "./images/laptops/prod6.jpg",
    price: 66690,
    ratings: 279,
    features: [
      `Processor: 11th Gen Intel Tiger Lake Core i5-1135G7 | Speed: 2.4 GHz (Base) - 4.2 GHz (Max) | 4 Cores | 8MB Cache`,
      `OS: Pre-Loaded Windows 10 Home with Lifetime Validity`,
      `Pre-Installed: MS Office Home and Student 2019`,
      `Memory and Storage: 16GB RAM DDR4-3200 | 512GB SSD`,
      `Graphics: Intel Iris Xe Integrated Graphics`,
      `Display: 15.6" Full HD (1920x1080) | Brightness: 300 nits | Anti-Glare | IPS Technology | 45% NTSC`,
      `Design: 1.79 cm Thin and 1.66 kg Light | Aluminium Material Top | Backlit Keyboard | Fingerprint Reader`,
      `Battery Life: 8 Hours | Rapid Charge (Up to 80% in 1 Hour)`,
      `Camera (Built in): HD 720p (1.0MP) Camera | Fixed Focus | Privacy Shutter | Integrated Dual Array Microphone`,
      `Audio: 2 x 2W Stereo Speakers | HD Audio | Dolby Audio`,
      `Ports: 2 USB 3.2 Gen 1, 1 USB 3.2 Type-C Gen 1, Headphone/Mic combo jack, HDMI 1.4b, 4-in-1 media reader (MMC, SD, SDHC, SDXC)`,
      `In the box: Laptop, Power Adapter and User Manual`,
      `Warranty: This genuine Lenovo laptop comes with 1 Year Onsite Warranty with Premium Care and Accidental Damage Protection`,
    ],
  },
  {
    desc: `Dell Vostro 3405 14" (35.56 cms) FHD Display Laptop (R5-3500U / 8GB / 512GB SSD / Integrated Graphics / Win 10 + MSO / Dune Color) D552166WIN9DE`,
    brand: `Dell`,
    image: "./images/laptops/prod7.jpg",
    price: 46190,
    ratings: 43,
    features: [
      `Processor: AMD Ryzen 5 3500U Mobile Processor with Radeon Vega 8 Graphics`,
      `Memory & Storage:8GB, 1x8GB, DDR4, 2400MHz |512GB M.2 PCIe NVMe Solid State Drive`,
      `Display:14.0-inch FHD (1920 x 1080) Anti-glare LED Backlight Narrow Border WVA Display`,
      `Graphics:Integrated graphics with AMD Radeon Vega 8 Graphics`,
      `Operating System & Software:Windows 10 Home Single Language | Microsoft Office Home and Student 2019`,
      `Others:English International Standard keyboard | Laptop weight:1.58 kg | Black`,
      `I/O ports:2x USB 3.2 Gen-1,USB 2.0,1x RJ45,SD Media Card Reader (SD, SDHC, SDXC)`,
    ],
  },
  {
    desc: `Life Digital Laptop 15.6-inch (39.62 cms) (Intel Core i5/4GB RAM/256GB SSD/Type-C Data/Windows 10), ZED AIR CX5`,
    brand: `Life Digital`,
    image: "./images/laptops/prod8.jpg",
    price: 29990,
    ratings: 83,
    features: [
      `Processor: Intel Core i5 5257U`,
      `Operating System: Windows 10 Home`,
      `Connectivity: USB Type-C data Port, Bluetooth, WiFi, LAN Port`,
      `4 GB DDR3 RAM`,
      `15.6 inch 1920 x 1080 (Full HD) Display for enhanced veiwing experience`,
      `256 GB SSD Storage`,
    ],
  },
  {
    desc: `ASUS VivoBook 14 (2020), Intel Core i5-1035G1 10th Gen, 14-inch (35.56 cm) FHD, Thin and Light Laptop (8GB/512GB SSD/Office 2019/Windows 10/Integrated Graphics/Silver/1.6 Kg), X415JA-EK562TS`,
    brand: `Asus`,
    image: "./images/laptops/prod9.jpg",
    price: 50990,
    ratings: 128,
    features: [
      `Processor: 10th Gen Intel Core i5-1035G1, 1.0 GHz Base Speed, Up to 3.6 GHz Turbo boost Speed, 4 cores, 8 Threads, 6MB Cache`,
      `Memory & Storage: 8GB (4GB onboard + 4GB SO-DIMM) DDR4 3200MHz RAM, Upgradeable up to 12GB using 1x SO-DIMM Slot with | Storage: 512GB SSD M.2 NVMe PCIe 3.0 with empty 2.5-inch SATA slot for HDD/SSD Upgrade Up to 1TB capacity.`,
      `Display: 35.56 cm LED-Backlit LCD, FHD (1920 x 1080) 16:9, 220nits, NanoEdge bezel, Anti-Glare Plane with 45% NTSC, 82% Screen-To-Body Ratio`,
      `Graphics: Integrated Intel UHD Graphics`,
      `Operating System: Pre-loaded Windows 10 Home with lifetime validity | Software Included: Office Home & Student 2019 Included`,
      `Design & battery: Up to 19.9mm Thin | NanoEdge Bezels | Thin and Light Laptop | Laptop weight: 1.6 kg | 37WHrs, 2-cell Li-ion battery | Up to 6 hours battery life ;Note: Battery life depends on conditions of usage`,
      `Keyboard: Chiclet Keyboard with 1.4mm Key Travel`,
      `I/O Ports: 1x HDMI 1.4 | 1x 3.5mm Combo Audio Jack | 1x USB 3.2 Gen 1 Type-A | 1x USB 3.2 Gen 1 Type-C | 2x USB 2.0 Type-A | Micro SD card reader`,
      `Other: Wi-Fi 5 (802.11ac) (Dual band) 1*1 | VGA webcamera without privacy shutter | Built-in speaker | Built-in microphone`,
    ],
  },
];

export default laptopData;
