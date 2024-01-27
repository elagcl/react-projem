import "./TripStyles.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1 style={{marginTop:"80px"}}>Sosyal Alanlarımız</h1>
      <p style={{fontSize:"20px",fontWeight:"300",marginBottom:"70px"}}>Birçok Tesisimizi Keşfedebilirsiniz</p>
      <div className="tripcard">
         <TripData 
            image={"https://cdn.gokonya.com/other/millet-bahcesi-meram-3.jpg"}
            heading="Dudlıkır Millet Bahçesi"
            text="Konya adına birçok ilki bünyesinde barındıran Millet Bahçesi, çok amaçlı alanlardan oluşuyor. Misafirlerine Meram’ın muhteşem havası ve yeşilliğinde, ateşli ya da ateşsiz alanlarda piknik yapabilme imkanı sunan bahçe, bunun yanı sıra yürüyüş ve spor alanları, restoran ve kafesi, çim kızağı ve parklarıyla verdiği hizmetlerin yanı sıra sosyal ve kültürel birçok etkinliğe de ev sahipliği yapıyor. Çok yönlü hizmet veren Dutlukır Millet Bahçesinde ayrıca, 100 adet çocuk oyun grubu, 40 bin metrekarelik çocuk oyun parkı, 10 bin metrekarelik üzüm bağı, 10 bin metrekarelik bir gölet, Osmanlı Bahçesi, mescit, sosyal tesisler, kokuluk ve reçellik gül bahçesi gibi renkli ve ilgi çekici alanlar bulunuyor."
         />
         <TripData 
            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzQ7rl86scuDwDRNf4XHiTTzhUcGg2LZLag&usqp=CAU"}
            heading="Millet Kütüphanesi"
            text="MİLLETİN KÜTÜPHANESİ 24 SAAT MİLLETİN HİZMETİNDE
            Konya Millet Bahçesi Kütüphanesi, modern bir kütüphane olmasının yanı sıra doğanın içinde huzurlu bir sığınak gibidir. Zengin koleksiyonu, sakin atmosferiyle kitap ve doğa tutkunlarını cezbeden bu mekanı Konya’da mutlaka ziyaret edin. 📚🌿
"
         />
         <TripData 
            image={"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0d/42/2d/97/80-binde-devri-alem.jpg"}
            heading="80 Binde Devri alem parkı"
            text=" Her yaş grubuna hitap etme hedefiyle 2014'te kurulan park, her yıl yüz binlerce ziyaretçiyi ağırlıyor. Daha büyük parklar Türkiye'de var ancak Türkiye'de bu özelliklere sahip başka park yok. Salgının etkilerinden biraz daha kurtulmak, eğlenerek öğrenmek ve de güzel vakit geçirmek için park son derece uygun bir yer. Parkın en önemli ziyaretçi grubunun öğrenciler olduğuna dikkati çeken Kavuş, Buranın ortalama ziyaretçi sayısı 250 bin civarında. Geçtiğimiz yıl bu rakam yüzde 40'lara kadar düştü. Park, hem büyüklerin hem de küçüklerin sosyal mesafeye uygun olarak vakit geçirebilecekleri nadide alanlardan bir tanesi. diye konuştu."
         />
       </div>
    </div>
  );
}

export default Trip;
