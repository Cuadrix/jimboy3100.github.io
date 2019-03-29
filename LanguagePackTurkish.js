// ==UserScript==
// @name         Agar.io Legend Mod Translations
// @namespace    www.legendmod.ml
// @version      0.2
// @description  Help Legend Mod to be translated in all languages
// @author       Jimboy3100
// @match        http://agar.io/*
// @match        https://agar.io/*
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @connect      agar.io
// ==/UserScript==

/*         var Languageletter =         "hello you" <---  You tranlate this, keep the " "; as they are.       // <-Means notes, no need to change           */

/* Example            var Languageletter0="Home";  //Home      ->    var Languageletter0="Maison";            //Home                                        */

/* Don't make exact Translation, just translate the meaning. Don't make very long texts, because it might not fit. Keep the <b></b> and SPACES as is        */

/*                                                  Thank you for supporting Legend Agar.io mod                                                             */



var translator="Unknown";		//Put your nickname, in order to be reffered to mod, or use name "Unknown"


var Languageletter0="Ana Menü";		//Home
var Languageletter1="Kullanıcı";		//User
var Languageletter2="Ayarlar";		//Settings
var Languageletter3="Tema";		//Theme
var Languageletter4="Kısayollar";		//Hotkeys
var Languageletter5="Youtube & Şarkılar";		//Youtube & Sounds
var Languageletter6="Araçlar";		//Tools
var Languageletter7="Herkese görünür olmak için boş bırak, veya Klan Tag'ı gir, ya da kendi Tag'ını gir";		//Password/Tag
var Languageletter7a="Şifre/Tag"	;	//Password/Tag
var Languageletter8="Oyun içi adınızı giriniz, 50 karakter Mod kullanıcılarına, 15 ise diğerlerine görünür";		//Insert your in-game name, 50 chars are visible on Mod users, 15 to other users
var Languageletter8a="İsim";		//Name
var Languageletter9="Manuel skin web adresini girin";		//Insert your manual skin weblink
var Languageletter9a="Direkt skin URL'si";		//Manual direct skin URL
var Languageletter10="Oynayacağınız bölge";		//The region to play
var Languageletter11="Oynayacağınız mod";		//The mode to play
var Languageletter12="Server'a bağlan, ya da bağlantıyı yenile";		//Connect to server, or restablish communication
var Languageletter12a="Bağlan";		//Connect
var Languageletter13="Katıl";		//Join
var Languageletter14="Misafir olarak oyna";		//Play as guest
var Languageletter15="Giriş yap ve oyna";		//Login and Play
var Languageletter16="İzle";		//Spectate
var Languageletter17="Facebook ile giriş yap";		//Sign in with Facebook
var Languageletter18="Google ile giriş yap";			//Sign in with Google
var Languageletter19="Oyna";		//Play
var Languageletter20="Dükkan"	;		//Shop
var Languageletter21="Ücretsiz Altın";		//Free Coins
var Languageletter22="Hediyeler";		//Gifts
var Languageletter23="Günlük Görevler";			//Daily Quests
var Languageletter24="Skinler";		//Skins
var Languageletter25="Legend Promo Videosu";		//Legend Promo Video
var Languageletter25a="Yeni Fikirler & Bilgi Formu";		//New Ideas & Statistics Form
var Languageletter25b="Mod bilgileri & Şablonlar";		//Mod Info & Templates
var Languageletter26="Skin ekle";		//Add skins
var Languageletter26a="Kopyalama Sunucusu, Parola, Takım Panosu ve Lider Tablosu";
var Languageletter31="Çıkış yap";		//Logout
var Languageletter32="Kere kullanıldı";		//Times Used
var Languageletter33="Legend Mod'u yapan";		//Legend Mod by
var Languageletter34="Çeviriyi yapan";		//Translation by
var Languageletter35="Sıralama isimlerini ve hücre adlarını kopyala. (göster/gizle için x'e bas)";		//copy leaderboard names and cell names. (press x to show/hide)
var Languageletter36="Animasyon";		//Animation
var Languageletter37="Animasyon gecikmesi";		//Animation delay
var Languageletter37a="Oto-Yakınlaştırma";		// Auto zoom
var Languageletter37b="Yakınlaştırma";		// Zoom
var Languageletter38="Yakınlaştırma hızı:";		//Zoom speed:
var Languageletter39="Yeniden doğma";			//Respawn
var Languageletter40="Oto-Yeniden doğuş";		//Auto respawn
var Languageletter41="Hızlı yeniden doğuş ";			//Quick respawn
var Languageletter42="İsimler";			//Names
var Languageletter43="İsim yok";		//No names
var Languageletter44="Optimize isim";		//Optimized names
var Languageletter45="İsimleri oto. gizle";		//Auto hide names
var Languageletter46="Benim ismimi gizle";		//Hide my name
var Languageletter47="Takımın ismini gizle";		//Hide teammates names
var Languageletter48="İsim kenar çizgileri";		//Names stroke
var Languageletter49="Mass";		//Mass
var Languageletter50="Mass'ı göster";		//Show mass
var Languageletter51="Optimize mass"	;	//Optimized mass
var Languageletter52="Mass'ı oto. gizle";			//Auto hide mass
var Languageletter53="Benim mass'ımı gizle";		//Hide my mass
var Languageletter54="Düşman mass'ını gizle";		//Hide enemies mass
var Languageletter55="Kısa mass";		//Short mass
var Languageletter56="Virüs atışları";		//Virus shots
var Languageletter57="Mass kenar çizgileri";		//Mass stroke
var Languageletter58="Skinler";		//Skins
var Languageletter59="Skin yok ";		//No skins
var Languageletter60="Özel skin";		//Custom skins
var Languageletter61="Orijinal skinler";		//Vanilla skins
var Languageletter62="Optimize yem";		//Optimized food
var Languageletter6a2="Yem";		//Food
var Languageletter63="Yemleri oto. gizle(mass)";		//Auto hide food (mass)
var Languageletter64="Yemleri oto. gizle(yakınlaştırma)";		//Auto hide food (zoom)
var Languageletter65="Rengarenk yemler";		//Rainbow food
var Languageletter66="Şeffaflık / renkler";		//Transparency / colors
var Languageletter67="Renk yok";		//No colors
var Languageletter68="Kendi rengim";		//My custom color
var Languageletter69="Kendi şeffaf skinim";		//My transparent skin
var Languageletter70="Şeffaf skinler";		//Transparent skins
var Languageletter70a="Şeffaf hücreler";		//Transparent cells
var Languageletter71="Şeffaf virüsler";		//Transparent viruses
var Languageletter72="Izgara / Bölgeler";		//Grid / sectors
var Languageletter73="Izgarayı göster";		//Show grid
var Languageletter74="Arkaplan bölgelerini göster";		//Show background sectors
var Languageletter75="Harita kenarlarını göster";		//Show map borders
var Languageletter76="Sohbet";		//Chat
var Languageletter77="Sohbeti kapat";		//Disable chat
var Languageletter78="Sesli bildirimler";		//Sound notifications
var Languageletter79="Emojiler";		//Emoticons
var Languageletter80="Shobette resim göster";		//Show images on chat
var Languageletter81="Sohbette video göster";		//Show videos on chat
var Languageletter82="Popup yerine sohbet kutusu";		//Chatbox instead of popups
var Languageletter82a="Harita";		//Minimap
var Languageletter82b="Haritayı göster";		//Show minimap
var Languageletter82c="Harita ızgarasını göster";		//Show minimap grid
var Languageletter82d="Harita rehberini göster";		//Show minimap guides
var Languageletter82e="Tek renkli takım";		//One-colored teammates
var Languageletter83="Yardımcılar";		//Helpers
var Languageletter84="Rakiplerin rengi";		//Opponents colors
var Languageletter85="Rakip göstergesi";		//Opponents rings
var Languageletter86="Virüslerin rengi";		//Viruses colors
var Languageletter87="Bölünme uzaklığı";		//Split range
var Languageletter88="Virüs atış uzaklığı";		//Viruses range
var Languageletter89="İmleç çizgileri";		//Cursor tracking
var Languageletter90="Takım yardımcıları";		//Teammates indicators
var Languageletter91="Fare kontrolü";		//Mouse control
var Languageletter92="Sol tık. - Fare ile bölün";		//LMB - Mouse split
var Languageletter93="Sağ tık. - Fare ile besle";		//RMB - Mouse feed
var Languageletter94="Fare tuşlarını çevir";		//Invert mouse buttons
var Languageletter94a="Göstergeler";		// HUD
var Languageletter95="Takımdaki ilk 5'i göster";		//Show team top 5
var Languageletter96="Hedeflemeyi göster";		//Show targeting
var Languageletter97="Ortalanmış sıralama";		//Centered leaderboard
var Languageletter98="Oyun bilgileri başta";		//Game stats at the top
var Languageletter99="Bilgiler";		//Stats
var Languageletter100="Oyun bilgilerini göster";		//Show game stats
var Languageletter101="Oyun bilgileri: Mass";		//Game stats: Mass
var Languageletter102="Oyun bilgileri: STE";		//Game stats: STE
var Languageletter103="Oyun bilgileri: n/16";		//Game stats: n/16
var Languageletter104="Oyun bilgileri: FPS";		//Game stats: FPS
var Languageletter105="Saati göster";		//Show current time
var Languageletter106="Ekstralar";		//Extras
var Languageletter107="Öldükten sonra bilgileri geç";		//Skip stats after death
var Languageletter108="Görev göster";		//Show quest
var Languageletter108a="Oyun sesleri"; //Game Sounds
var Languageletter108b="Menü sesleri"; //Menu Sounds
var Languageletter109="Popup'ları engelle (reklamlar/dükkan/görev)";		//Block popups (ads/shop/quest)
var Languageletter109a="SES"; //Voice
var Languageletter109b="Ses-Ön ek"; //Voice-Prefix
var Languageletter109c="Ses-dili"; //Voice-language
var Languageletter110="-- Grafik Kalitesi --";		//-- Graphics Quality --
var Languageletter111="Grafikler: Retina";		//Graphics: Retina
var Languageletter112="Grafikler: Yüksek";		//Graphics: High
var Languageletter113="Grafikler: Orta";		//Graphics: Medium"
var Languageletter114="Grafikler: Düşük";		//Graphics: Low
var Languageletter115="Grafikler: Çok Düşük";		//Graphics: Very Low
var Languageletter116="Ayarları içe al / dışa aktar";		//Export / import settings
var Languageletter117="Eski ayarlara dön";		//Restore default settings
var Languageletter118="Ayarları dışa aktar";		//Export settings
var Languageletter119="Ayarları içe al";		//Import settings
var Languageletter120="Seçilen ayarları dışa aktarmak için aşağıdaki kodu kopyalayın ve Unicode'da kodlanmış bir metin dosyasına kaydedin..";		//To export selected settings copy the code below and save it to a text file encoded in Unicode.
var Languageletter121="Seçilen ayarları içe aktarmak için verilen kodu aşağıya yapıştırın ve 'Ayarları al' düğmesine basın.";		//To import selected settings paste an exported code below and press the 'Import settings' button.
var Languageletter122="Komutlar";		// Commands
var Languageletter123="Kısayollar";		// Hotkeys
var Languageletter124="Profiller";		// Profiles
var Languageletter125="Ayarlar";		// Settings
var Languageletter126="Tema";		// Theme
var Languageletter127="Ayarları çıkart";		//Export settings
var Languageletter128="Ayarları içe al";		//Import settings
var Languageletter129="Basit tema ayarları";		//Basic theming
var Languageletter130="Menü";		//Menu
var Languageletter131="Gösterge";		//HUD
var Languageletter132="Sohbet";		//Chat
var Languageletter133="Harita";		//Minimap
var Languageletter134="Grafikler / İmleçler";		//Graphics / cursors
var Languageletter135="Tema ayarları";		//Theme preset
var Languageletter136="Legend Orijinal";		//Legend Original
var Languageletter137="Çılgın Mod";		//Crazy Style 1
var Languageletter139="Arkaplan";		//Background
var Languageletter140="Harita kenarları";		//Map borders
var Languageletter141="Izgara";		//Grid
var Languageletter142="Bölge yazı tipi";		//Sectors font
var Languageletter143="İsimler";		//Names
var Languageletter144="İsim kenar çizgileri";		//Names stroke
var Languageletter145="Mass";		//Mass
var Languageletter146="Mass kenar çizgileri";		//Mass stroke
var Languageletter147="Virüs kenar çizgileri";		//Virus stroke
var Languageletter148="Virüs";		//Virus
var Languageletter149="Yem";		//Food
var Languageletter150="Takım yardımcıları";		//Teammate indicator
var Languageletter151="İmleç çizgileri";		//Cursor tracking
var Languageletter152="Bmlünme uzaklığı";		//Split range
var Languageletter153="İsim yazı tipi";		//Names font
var Languageletter154="Mass yazı tipi";		//Mass font
var Languageletter155="Blge yazı tipi";		//Sectors font
var Languageletter157="Bölge yazı büyüklüğü";		//Sectors font size
var Languageletter158="İsimlerin büyüklüğü";		//Names scale
var Languageletter159="Mass'ın büyüklüğü";		//Mass scale
var Languageletter160="Virüs mass büyüklüğü";		//Virus mass scale
var Languageletter161="Yazı çizgisi büyüklüğü";		//Text stroke scale
var Languageletter162="Yem büyüklüğü";		//Food size:
var Languageletter163="Virüs çizgi büyüklüğü";		//Virus stroke size
var Languageletter164="Harita kenar genişliği";		//Map borders width
var Languageletter165="Bölge ızgara genişliği";		//Sectors grid width
var Languageletter166="Hücre şeffaflığı";		//Cells transparency
var Languageletter167="Skin şeffaflığı";		//Skins transparency
var Languageletter168="Virüs şeffaflığı";		//Virus transparency
var Languageletter169="İsim & mass şeffaflığı";		//Names & mass transparency
var Languageletter170="Eski tema ayarlarına geri dön";		//Restore theme default settings
var Languageletter171="Ayarları kaydet";		//Save settings
var Languageletter172="Menü teması";		//Menu theme
var Languageletter173="Arkaplan";		//Background
var Languageletter174="Şeffaflık";		//Transparency
var Languageletter175="Ana renk";		//Main color
var Languageletter176="Tuş yazısı";		//Button text
var Languageletter177="Panel";		//Panel
var Languageletter179="Panel yazısı";		//Panel text
var Languageletter181="Tuş";		//Button
var Languageletter189="Panel arkaplan resmi";		//Panel background image
var Languageletter190="Resim URL'si";		//Image URL
var Languageletter191="Ana renk";		//Main color
var Languageletter192="Arkaplan";		//Background
var Languageletter193="Yazı";		//Text
var Languageletter194="Bilgiler";		//Stats
var Languageletter195="Zaman";		//Time
var Languageletter196="İlk 5'in mass'ı";		//Top 5 mass
var Languageletter197="Sıralama - ben";		//Leaderboard - me
var Languageletter198="Sıralama - takım";		//Leaderboard - teammate
var Languageletter199="Gösterge yazı tipi";		//HUD font
var Languageletter200="Gösterge büyüklüğü";		//HUD scale:
var Languageletter201="Mesaj arkaplanı";		//Message background
var Languageletter202="Mesaj yazısı";		//Message text
var Languageletter203="Mesaj zamanı";		//Message time
var Languageletter204="Mesaj nick'i";		//Message nick
var Languageletter205="Komut arkaplanı";		//Command background
var Languageletter206="Komut yazısı";		//Command text
var Languageletter207="Komut yazısı";		//Command time
var Languageletter208="Komut nick'i";		//Command nick
var Languageletter209="Sohbet kutusu rengi";		//Chatbox color
var Languageletter210="Sohbet büyüklüğü";		//Chat scale
var Languageletter211="Bölgeler";		//Sectors
var Languageletter212="Şimdiki bölge";		//Current sector
var Languageletter213="Nick";		//Nick
var Languageletter214="Nick kenar çizgileri";		//Nick stroke
var Languageletter215="Benim hücrem";		//My cell
var Languageletter216="Benim hücre çizgilerim";		//My cell stroke
var Languageletter217="Takım";		//Teammates
var Languageletter218="Ölüm yeri";		//Death location
var Languageletter219="Yardımcılar";		//Guides
var Languageletter220="Harita yazı tipi";		//Minimap font
var Languageletter221="Nick yazı tipi";		//Nick font
var Languageletter222="Harita genişliği";		//Minimap width
var Languageletter223="Bölge şeffaflığı";		//Sectors transparency
var Languageletter224="Nick büyüklüğü";		//Nick size
var Languageletter225="Nick kenarlık büyüklüğü";		//Nick stroke size
var Languageletter226="Hücremin büyüklüğü";		//My cell size
var Languageletter227="Hücremin kenarlık büyüklüğü";		//My cell stroke size
var Languageletter228="Takım büyüklüğü";		//Teammates size
var Languageletter229="Özel arkaplan resmi";		//Custom background image
var Languageletter230="Özel imleç resmi";		//Custom cursor image
var Languageletter231="Resim URL'si";		//Image URL
var Languageletter232="İmleç resmi URL'si";		//Cursor image URL
var Languageletter233="Besle";		//Feed
var Languageletter234="Çok besle";		//Macro feed
var Languageletter235="Bölün";		//Split
var Languageletter236="İki defa bölün";		//Double split
var Languageletter237="Popsplit";		//Popsplit
var Languageletter238="16'ya bölün";		//Split 16
var Languageletter239="HÜcreyi durdur";		//Cell pause
var Languageletter240="Göster/Gizle ilk 5'i";		//Show/hide team top 5
var Languageletter241="Göster/Gizle saat";		//Show/hide current time
var Languageletter242="Göster/Gizle bölünme uzaklığı";		//Show/hide split range"
var Languageletter243="Göster/Gizle takım yardımcıları";		//Show/hide teammates indicators
var Languageletter244="Göster/Gizle bölünme yardımcıları";		//Show/hide split indicators
var Languageletter245="Göster/Gizle rakip rengi";		//Show/hide opponents colors
var Languageletter246="Skinler arası geçiş (Özel/Varsayılan)";		//Toggle skins (custom/default)
var Languageletter247="Şeffaf skinlere geç";		//Toggle transparent skins
var Languageletter248="Göster/Gizle skinler";		//Show/hide skins
var Languageletter249="Göster/Gizle oyun bilgileri";		//Show/hide game stats
var Languageletter250="Hücreler arası geçiş (En küçük/en büyük)";		//Toggle own cells (smallest/biggest)
var Languageletter251="Göster/Gizle yem";		//Show/hide food
var Languageletter252="Göster/Gizle ızgara";		//Show/hide grid
var Languageletter253="Göster/Gizle harita yardımcıları";		//Show/hide minimap guides
var Languageletter254="Göster/Gizle Sohbet";		//Show/hide chat
var Languageletter255="Göster/Gizle Gösterge";		//Show/hide HUD
var Languageletter256="Sıralamayı kopyala";		//Copy leaderboard
var Languageletter257="Göster/Gizle Sıralama";		//Show/hide leaderboard
var Languageletter258="Oto-yakınlaştırmaya geç";		//Toggle auto zoom
var Languageletter259="Yakınlaştırmayı resetle";		//Reset zoom
var Languageletter260="Ölüm konumuna geç";		//Toggle death location
var Languageletter261="Sohbet geçmişini göster / Sohbeti temizle";		//Show chat history / Clear chat
var Languageletter262="Göster/Gizle arkaplan bölgelerini";		//Show/hide background sectors
var Languageletter263="Göster/Gizle küçük botları";		//Show/hide small bots
var Languageletter264="Göster/Gizle isimleri";		//Show/hide names
var Languageletter265="Göster/Gizle takım arkdş. ismi";		//Show/hide teammates names
var Languageletter266="Göster/Gizle mass";		//Show/hide mass
var Languageletter267="Göster/Gizle harita";		//Show/hide minimap
var Languageletter268="Sohbet mesajını gir";		//Enter chat message
var Languageletter269="Hızlı doğma";		//Quick respawn
var Languageletter270="Oto-yeniden doğmaya geç";		//Toggle auto respawn
var Languageletter271="Yakınlaştırma düzeyi";		//Zoom level
var Languageletter272="Takip panelini Göster/Gizle";		//Show/hide targeting panel
var Languageletter273="HedeflemeyiBaşlat/Durdur (Takip)";		//Start/stop targeting (following)
var Languageletter274="Hedeflemeyi iptal et";		//Cancel targeting
var Languageletter275="Hedefi değiştir";		//Change target
var Languageletter276="Haritada hedefi göster";		//Show target on the minimap
var Languageletter277="Görevleri Göster/Gizle";		//Show/hide quest
var Languageletter278="Bir kısayol tuşu atamak için giriş alanına tıklayın ve seçtiğiniz tuşa basın.";		//To assign a hotkey click on the input field and press your chosen key.
var Languageletter279="Bir kısayol tuşunu silmek için giriş alanına tıklayın ve DEL tuşuna basın.";		//To delete a hotkey click on the input field and press the DELETE key.
var Languageletter280="CTRL ve ALT tuşlarıyla olası tuş kombinasyonları.";		//Possible key combinations with the CTRL and ALT keys.
var Languageletter281="Eski ayarlara döndür";		//Restore default settings
var Languageletter282="Ayarları kaydet";		//Save settings
var Languageletter283="Kapat";		//Close
var Languageletter284="Youtube Oynatıcısı";		//Youtube player
var Languageletter284a="Youtube Url";		// Youtube Url
var Languageletter285="Video/oynatma listesini buraya yapıştır";		//Paste your video/playlist here
var Languageletter286="Sesler";		//Sounds
var Languageletter287="Mesaj bildirim sesi";		//Message notification sound
var Languageletter288="Komut bildirim sesi";		//Command notification sound
var Languageletter289="Kopyala Token/SIP";		//Copy Token/SIP
//keep this small
var Languageletter290="Token";		//Token
var Languageletter290a="Pano"; //Board
var Languageletter290b="TK&PW";	//TK&PW (Token and Password)
var Languageletter290c="TK&ALL"; //TK&ALL (Token and All)
var Languageletter291="Kopyala";		//Copy

var Languageletter291a="Kopyala Sıralama (L)";		//Copy Leaderboard (L)
var Languageletter291b="Kopyala Token/SIP&Şifre"; 	//Copy Token/SIP&Password
var Languageletter291c="Kopyala Token/SIP, Şifre, Sıralama..."; //Copy Token/SIP, Password, Leaderboard...
var Languageletter292="Server'a katıl (Backspace)";		//Join server (Backspace)
var Languageletter293="Server'ı değiştir (+)";		//Change server (+)
var Languageletter294="Sıralama geçmişi";		//Leaderboard history
var Languageletter295="Arkadaş tokeni, IP, sıralama, isim veya klan tagı giriniz ...";		//Enter friend token, IP, leaderboard, name or clan tag...
var Languageletter295a="Listeyi temizle";
var Languageletter295b="Sohbet mesajını girin ...";
var Languageletter298="En üst Takım ";		//Team top
var Languageletter299="Sıralama";		//Leaderbodard
var Languageletter300="İletişim";		//Communication
var Languageletter301="Mesaj Script Komutları";		//Message Script Commands
var Languageletter302="Mesaj Imgur Simgeleri";		//Message Imgur Icons
var Languageletter303="Mesaj Youtube Videoları";		//Message Youtube Videos
var Languageletter304="İsimleri düzenle";		//Edit names
var Languageletter305="[Sadece İzleme Modu] Dürbünler";		//[Spectate Mode Only] Binoculars
var Languageletter306="Oyna / Duraklat";		//Play / Pause
var Languageletter307="Tam ekran";		//Fullscreen
var Languageletter308="Döndür";		//Rotate
var Languageletter309="Varsayılan";		//Default
var Languageletter310="Geri";		//Back
var Languageletter311="Sonrası için sakla";		//Save for later
var Languageletter312="Bölge";		//Region
var Languageletter313="Oyuncular";		//Players
var Languageletter314="Server'lar";		//Servers
var Languageletter315="[Hedef belirtilmedi]";		//[Target not set]
var Languageletter316="Kendi arkaplanım";		//Manual background
var Languageletter317="Kendi mesaj simgelerim&Youtube";		//Manual Message Icons&Youtube
var Languageletter318="Sohbet konumu";		//Chat Position
var Languageletter319="Discord Webhook Url (for sending TOKEN)";		//Discord Webhook Url (for sending TOKEN)
var Languageletter320="Sıralama";		//Leaderboard
var Languageletter321="Takım Sıralaması";		//Teamboard
var Languageletter322="Ana Canvas";		//Main Canvas
var Languageletter323="Ana Sembol";		//Main Banner
var Languageletter324="Merhaba Takım!";		//Hello Team!
var Languageletter325="Takıma gül";		//Laugh to Team
var Languageletter326="Takımın nick'lerini seninkine çevir";		//Team Change Name to yours
var Languageletter327="Ölünce Trolle";		//Troll on Death
var Languageletter328="Youtube Müzik'i aç";		//Open Youtube Music
var Languageletter329="Çılgın Mod (Her şeyi gizle)";		//Insane mode (Hide Everything)
var Languageletter330="Url şununla başlar http://... or https://...";		//Url of image starting with http://... or https://...
var Languageletter331="Harita resim URL'si";		//Minimap Image URL
var Languageletter332="Harita Yazısı";		//Minimap Text
var Languageletter333="Sıralama Logo Yazısı";		//Leaderboard Logo Text
var Languageletter333a="Sıralama Resim URL'si";		// Leaderboard Image URL
var Languageletter334="Takım Logo Yazısı";		//Teamboard Logo Text
var Languageletter334a="Takım Resim URL'si,";		// Teamboard Image URL
var Languageletter335="Main Canvas Image URL";		//Main Canvas Image URL
var Languageletter336="Main Banner Icon URL";		//Main Banner Icon URL
var Languageletter337="Main Banner Link URL";		//Main Banner Link URL
var Languageletter338="Simge";		//Icon
var Languageletter339="Örnek";		//e.g
var Languageletter340="Gösterilecek Youtube URL'si";		//Url of youtube to be shown
var Languageletter341="Yönlendirme bağlantısının URL'si";		//Url of link to redirect
var Languageletter342="Discord Webhook Url";		//Discord Webhook Url
var Languageletter342a="Mesaj Simge Yazısı";		//Message Icon Text
var Languageletter342b="Youtube Mesaj Yazısı";		//Youtube Message Text
var Languageletter342c="Imgur Mesaj Simge URL'si";		//Message Icon Imgur Url
var Languageletter342d="Youtube Mesaj URL'si";		//Youtube Message Url
var Languageletter343="Hizmetin çalışabilmesi için doldurulmalıdır";		//Must be filled for function to work.
var Languageletter344="İkincil Webhook(isteğe bağlı)";		//Secondary Webhook(optional)
var Languageletter345="UYARI! Popup'lar ayarlarda engellendi.";		//WARNING! Popups are blocked in the settings.
var Languageletter346="Geçici olarak engeli kaldır";		//Temporary unblock
var Languageletter347="UYARI! Popup'lar ayarlarda engellendi.";		//WARNING! Popups are blocked in the settings.
var Languageletter348="Geçici olarak engeli kaldır";		//Temporary unblock

var Languageletter349="İksirler";	//Potions
var Languageletter350="Eski skinler";	//Old Skins
var Languageletter351="Özel teklifler"; //Special Deals
var Languageletter352="Sıralama"; //Leaderboards
var Languageletter353="Yeni fikirler & Bilgi Formu"; //New Ideas & Statistics Form
var Languageletter354="Video Skinleri"; //Video Skins
var Languageletter355="Mini Script'ler"; //Mini Scripts
var Languageletter356="Kullanıcı Script'leri"; //User Scripts
var Languageletter357="Ses & Kamera Sohbeti";	//Voice & Camera Chat
var Languageletter358="Lütfen Legend mod'un geliştiricisini destekleyin";	//Please support the development of Legend mod
var Languageletter359="Nick'in yazı tipini tasarla";	//Design Nickname Font
var Languageletter360="Sahte Skini İşaretleyin";	//Flag the Fake Skin
var Languageletter361="Daha fazla FPS";	//More FPS

var Premadeletter0="İletişim aktif"; 		//Communication Activated
var Premadeletter1="Bu Youtube URL'si açılmıyor";		 //Cannot open this youtube URL
var Premadeletter2="Oyuncunun ismi 15 harften fazla ise sohbet edemezsiniz"; 		//[SERVER]: You cannot chat if player name > 15 chars
var Premadeletter3="Easter Egg 1 Aktif"; 		//Easter Egg 1 Activated
var Premadeletter4="Easter Egg 2 Aktif";		//Easter Egg 2 Activated
var Premadeletter5="Easter Egg 3 Aktif";		//Easter Egg 3 Activated
var Premadeletter6="Video vanilla ile daha iyi çalışır, gidin:";		//Video works better on vanilla, visit:
var Premadeletter7="Notlar:<b>Facebook</b> uyumluluğu <b>Google Plus</b> 'tan daha iyidir."; 		//Notes:<b>Facebook</b> compatibility is better than <b>Google Plus</b>.
var Premadeletter8="Notlar:Agar.io sadece yüklü etkinliklerde <b>Google Plus</b> 'a bağlanır. Oturumu kapatırsanız, Agar.io'ya yeniden katılın veya <b>Facebook</b> kullanın.";		//Notes:Agar.io can only connect to <b>Google Plus</b> on onload events. If logout occurs, rejoin Agar.io or use <b>Facebook</b>.
var Premadeletter9="Yüklemeyle ilgili olaylarda oturum kapatılırsa, Chrome çerezlerini";		//If logout occurs on onload events, delete Chrome cookies from
var Premadeletter10="Server bağlantısını kes :(";		//Disconnected from server :(
var Premadeletter11="Banlandınız, modeminizi resetleyin!";		//You were banned, restart your rooter!
var Premadeletter12="Bağlandı!";		//Connected!
var Premadeletter13="OYNA";		//PLAY
var Premadeletter14="İZLE";		//SPECTATE
var Premadeletter15="Geçersiz IP veya server kapandı :(";		//Invalid token or server has closed :(
var Premadeletter16="Güncellenebilir";		//can be Updated to
var Premadeletter17="Tekrar Hoş Geldiniz";			//Welcome back
var Premadeletter18="Kısayol alanınız ve diğer bölgeler (son sekmeden) hala devre dışı! Onları etkinleştirmenizi öneririz.";		//Your shortcut area and other areas (from last tab) are still disabled! We suggest you enable them.
var Premadeletter19="Etkinleştir";		//Enable Them
var Premadeletter20="Kapalı Dursun";		//Keep Them Disabled
var Premadeletter21="IP aranıyor";		//Searching IP
var Premadeletter22="Takım arkadaşın";		//Your teammate
var Premadeletter23="hepsini gizlemek istiyor (sıralama ve harita)";		//wants you to hide all (leaderboard and minimap)
var Premadeletter24="Kabul et!";		//Accept
var Premadeletter25="Kabul etme!";		//NO WAY!
var Premadeletter26="senin nick'ini şuna çevirmek istiyor";		//wants you to change your name to
var Premadeletter27="Ölünce Trolle'yi gizlemek istiyor";		//wants you to hide Enable Troll on death
var Premadeletter28="Yotube oynatıcısını açmak istiyor";			//wants you to open Youtube Player
var Premadeletter29="Sıralama bulundu";		//Leaderboard found
var Premadeletter30="Ara";		//Search
var Premadeletter31="Sıralama bulunamadı. Denemeye devam...";		//The leaderboard was not found. Keep trying...
var Premadeletter32="Arama iptal edildi";		//Search was canceled
var Premadeletter33="Takım / Klan'a görünmezsin";		//You are invisible to Team / Clan
var Premadeletter34="Takım / Klan'a görünürsün";		//You are visible to Team / Clan
var Premadeletter35="Gizle / Göster sadece oyundayken kullanılarbilir";			//Hide/Show can be used only while playing
var Premadeletter36="Bu geçerli bir Discord Webhook address'i değil";		//This is not valid Discord Webhook address
var Premadeletter37="Server kilitlendi";		//Server is locked
var Premadeletter38="İzleme modunda olmalısınız";		//You must be on spectate mode
var Premadeletter39="Spam sorunları nedeniyle ya oyunda olmalısınız ya da şifre kullanmalısınız";		//Due to spamming issues, you must be in game and use password

//					These buttons must no be big in length
var Premadeletter40="Oto. Youtube Açık";		//Auto Youtube On
var Premadeletter41="Oto. Youtube Kapalı";		//Auto Youtube Off
var Premadeletter42="Kısayolları göster";		//Show Shortcuts
var Premadeletter43="Kısayolları gizle";		//Hide Shortcuts
var Premadeletter44="XP BAR'ını göster";		//Show XP BAR
var Premadeletter45="XP BAR'ını gizle";		//Hide XP BAR
var Premadeletter45a = "Yuvarlak gösterge"; //Rounded Hud
var Premadeletter45b = "Kare gösterge"; //Square Hud
var Premadeletter46 = "Animasyonlu skinleri göster"; //Show Anim. Skins
var Premadeletter47 = "Animasyonlu skinleri gizle"; //Hide Anim. Skins

var Premadeletter48="Her şeyi göster";		//Show Everything
var Premadeletter49="Her şeyi gizle";		//Hide Everything
var Premadeletter50="Zaman hesaplayıcıyı göster";		//Show Timer Calc.
var Premadeletter51="Zaman hesaplayıcıyı gizle"		//Hide Timer Calc.

var Premadeletter53="Oto. bedava altın";		//Auto free coins
var Premadeletter54="Bedava altınları durdur";		//Stop free coins
var Premadeletter55="Ölünce Trolle";		//Troll on Death
var Premadeletter56="Ölünce Trolleme yok";		//No troll on Death

var Premadeletter57="İletişim";		//Communication
var Premadeletter58="Gizli";		//Hidden
var Premadeletter59="Görünür";		//Visible
var Premadeletter60="Durdur";		//Pause

var Premadeletter61 = "YT'yi arka plan olarak etkinleştir";	//Enable YT as background
var Premadeletter62 = "YT'yi arka plan olarak devre dışı bırak";	//Disable YT as background";
var Premadeletter63 = "URL'yi açmanı istiyor";	//wants you to open the url
var Premadeletter64 = "bu youtube videosunu yerleştirmeni ve oynatmanı istiyor";	//wants you to embed and play this youtube video
var Premadeletter65 = "aşağıdaki Skype odasına katılmanı istiyor";	//wants you to join the following Skype room
var Premadeletter66 = "aşağıdaki Discord odasına katılmanı istiyor";	//wants you to join the following Discord room
var Premadeletter67 = "bu sunucudan ayrılıp bu yeni sunucuya katılmanızı istiyor";	//wants you to leave this server and join this new one

var Premadeletter68 = "Bastınız"; //You pressed
var Premadeletter69 = "yeniden başlat eğer"; //restart if
var Premadeletter70 = "droplar"; //drops
var Premadeletter71 = "Animasyonlu skinler"; //Animated skins
var Premadeletter72 = "aktif"; //enabled
var Premadeletter73 = "drop"; //drop
var Premadeletter74 = "iken"; //when
var Premadeletter75 = "Animasyonlu skinler"; //Animated skins will be
var Premadeletter76 = "Kapalı"; //disabled
var Premadeletter77 = "Katıldıktan sonra"; //after rejoin
var Premadeletter78 = "Daha iyi FPS"; //Better FPS
var Premadeletter79 = "16'da iken performans"; //performance when 16
var Premadeletter80 = "Dying Light Expansion etkinleştirildiğinde, Ölüm Trollü gerçekleşemez"; //When Dying Light Expansion is enabled, Troll on death cannot occur
var Premadeletter81 = "Özel Server"; //Private Server
var Premadeletter82 = "Herhangi birine bağlan"; //Connect to any
var Premadeletter83 = "server, veya kendininkini yap"; //server, or make your own
var Premadeletter84 = "Sunucuların IP adresini biliyorsanız agario benzeri oyunlar oynayın"; //Play agario-like games if you know the IP of servers
var Premadeletter85 = "Resminiz panoya kopyalandı. Yapıştır"; // Image of your has been copied to clipboard. Paste it
var Premadeletter86 = "Özel URL alanına"; //to custom skin Url area
var Premadeletter87 = "Profilinizin resmini kullanmak için Giriş yapmalısınız."; //You must Login to use picture of your profile
var Premadeletter88 = "Yanlış bir sürüm kullanıyorsunuz"; //You are using a wrong version
var Premadeletter89 = "Oyun şimdi sona erecek"; //Game will terminate now
var Premadeletter90 = "Özel Teklifler"; //Special Deals
var Premadeletter91 = "Agario size Skin'i verebilir veya vermeyebilir, ancak altınları kesin verir"; //Agario may or may not give you the Skin, but only the coins
var Premadeletter91a = "Kullanım kendi sorumluluğunuzdadır"; //Use at your own risk
var Premadeletter92 = "Arkadaşınızın UID'si yanlışsa, satın alma işlemi başarısız olur"; //If friend UID is wrong, purchase will fail
var Premadeletter93 = "UID Fabrika Ayarları"; //UID Factory Settings
var Premadeletter94 = "Özel Teklifleri yüklemek için giriş yapmalısınız"; //You must login to load Special Deals
var Premadeletter95 = "Sahte resim panoya kopyalandı. Yapıştır"; // Fake image has been copied to clipboard. Paste it
var Premadeletter96 = "Sahte bayrak işlevini etkinleştirmek için özel URL alanı"; // o custom skin Url area in order to activate the fake flag function
var Premadeletter97 = "Recaptcha ile işin bitince beni haberdar et"; //Inform me when you finish with Recapatcha
var Premadeletter98 = "Bitirdim"; //I have finished
var Premadeletter99 = "Boşver"; //Never Mind
var Premadeletter100 = "XP'nizi hesaplarken lütfen bekleyin ..."; //Calculating your XP, please wait...
var Premadeletter101 = "Yap"; //Do
var Premadeletter102 = "DEĞİL"; //NOT
var Premadeletter103 = "bas"; //press
var Premadeletter104 = "Özel skin URL'sini sil"; //Erase custom skin URL
var Premadeletter105 = "video skini seç";	//select video skin
var Premadeletter106 = "video skini seçmeyi bırak"; //unselect video skin
var Premadeletter107 = "sesi kapat"; //mute audio
var Premadeletter108 = "The LM Projesi"; //The LM Project
var Premadeletter109 = "Yükleme / İndirme"; //Upload / Download
var Premadeletter110 = "ne olduğunu bilmiyorsanız buraya hiçbir şey girmeyin";	//do not enter anything here unless you know what it is
var Premadeletter111 = "satın almak için turuncu simgeye tıklayın"; //click on the orange icon to buy
var Premadeletter112 = "Bazı ödeme yöntemleri için"; //For some payment methods
var Premadeletter113 = "Kapat";	//Close
var Premadeletter114 = "KOPYALA"; //COPY
var Premadeletter115 = "arkadaşlarına teklif almak için kullanılır"; //is used to buy offers for your friends
var Premadeletter116 = "Alışveriş yapmak için hesabınıza giriş yapmış olmanız gerekir…"; //To make purchases, you must be logged in to your account…
var Premadeletter117 = "Kütüphane"; //Library
var Premadeletter118 = "ziyaret"; //visit
var Premadeletter119 = "Sahte olarak raporla (Skini değiştir)"; //Report as Fake (change Skin)
var Premadeletter120 = "Oyuncunu TAM ismini girin"; //Enter your EXACT name of the player
var Premadeletter121 = "Oyuncuları taciz etmek ve uygunsuz kullanım, kullanıcının UID'sine yol açacaktır"; //Abusing players and inappropriate use will lead UID of user
var Premadeletter122 = "bu eklentinin kullanımının kalıcı olarak yasaklanması"; //to permanent ban from usage of this extension

//These are for file: https://jimboy3100.github.io/legendhelper.js
var Externalletter0a = "DUUJJİL"; //LANGUAGES
var Externalletter0b = "Bir dil seçiniz"; //Choose a language
var Externalletter0c = "Değişiklikler yeniden başlattıktan sonra tamamen gerçekleşecek"; //Changes will take place completely after the restart

var Externalletter1 = "BİLGİ"; //INFORMATION
var Externalletter2 = "ŞABLONLAR"; //TEMPLATES
var Externalletter3 = "MANUEL ŞABLONLAR"; //MANUAL TEMPLATES
var Externalletter4 = "Kendi şablonunuzu seçin"; //Choose your template
var Externalletter5 = "Veya bir genişleme seçin"; //Or choose an expansion

//These are for file: https://jimboy3100.github.io/legendformIframe.js
var Externalletter5a = "KODLARI GELİŞTİRİCİYE YOLLAYIN"; //SEND CODE TO DEVELOPERS

//These are for file: https://jimboy3100.github.io/legend.sniff3.js
var Externalletter6 = "Scriptinizi bu Textarea'ya yapıştırın, birden fazla Script yükleyebilirsiniz"; //Paste your Script in this Textarea, you can load multiple Scripts
var Externalletter7 = "Textarea'dan Script Yükle"; //Load Script from Textarea
var Externalletter8 = "Seç"; //Choose
var Externalletter9 = "Script'i sil"; //Erase Script
var Externalletter10 = "İsim"; //Name
var Externalletter11 = "İle başlayan Raw Github veya diğer Raw Komut Dosyası URL'si"; //Url of Raw Github, or other Raw Script, starting with
var Externalletter12 = "Komut dosyası URL'den içe aktarılmazsa bunu boş bırakın"; //Leave this empty if script not imported from URL
var Externalletter13 = "ÖNEMLİ BİLDİRİM: Çalışmayan URL'leri saklamayın, çünkü bunlar yük olayları olarak kullanılır. Senaryo onload olaylarına zarar verirse, ÇEREZLERİ SİLİN"; //IMPORTANT NOTICE: Do not keep URLs which do not work, because they are used as onload events. If Scenario damages onload events, then DELETE COOKIES