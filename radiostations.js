const radios =
[
	{ name: 'Bassoradio', url: 'http://stream.basso.fi:8000/stream' },
	{ name: 'BOX', url: 'http://box.basso.fi:8000/stream' },
	{ name: 'Classic', url: 'https://stream.gbtimes.com/classic' },
	{ name: 'I LUV 2K', url: 'http://iluv2k.basso.fi:8000/stream' },
	{ name: 'Iskelmä', url: 'http://stream.bauermedia.fi/iskelma/iskelma_64.aac' },
	{ name: 'Kasari', url: 'http://stream.bauermedia.fi/kasari/kasari_64.aac' },
	{ name: 'Kiss', url: 'http://stream.bauermedia.fi/kiss/kiss_64.aac' },
	{ name: 'City', url: 'http://stream.bauermedia.fi/radiocity/radiocity_64.aac' },
	{ name: 'Nostalgia', url: 'http://cdn.nrjaudio.fm/adwz1/fi/35059/mp3_128.mp3' },
	{ name: 'Nova', url: 'http://stream.bauermedia.fi/radionova/radionova_64.aac' },
	{ name: 'NRJ', url: 'http://cdn.nrjaudio.fm/adwz1/fi/35001/mp3_128.mp3' },
	{ name: 'Patmos', url: 'http://46.28.53.118:7011/radio' },
	{ name: 'SuomiRock', url: 'http://stream.bauermedia.fi/suomirock/suomirock_64.aac' },
	{ name: 'Ysäri', url: 'http://stream.bauermedia.fi/ysari/ysari_64.aac' },
	{ name: 'Auran Aallot', url: 'https://stream.mediatakojat.fi/aallot' },
	{ name: 'FUN Tampere', url: 'http://st.downtime.fi/fun.mp3' },
	{ name: 'Iskelmä Ankkuri', url: 'http://stream.bauermedia.fi/iskelma/kem_64.aac' },
	{ name: 'Iskelmä Forssa', url: 'http://stream.bauermedia.fi/iskelma/frs_64.aac' },
	{ name: 'Iskelmä Helsinki', url: 'http://stream.bauermedia.fi/iskelma/hki_64.aac' },
	{ name: 'Iskelmä Hyvinkää', url: 'http://stream.bauermedia.fi/iskelma/hyv_64.aac' },
	{ name: 'Iskelmä Janne', url: 'http://stream.bauermedia.fi/iskelma/hml_64.aac' },
	{ name: 'Iskelmä Jyväskylä', url: 'http://stream.bauermedia.fi/iskelma/jkl_64.aac' },
	{ name: 'Iskelmä Kotka', url: 'http://stream.bauermedia.fi/iskelma/ktk_64.aac' },
	{ name: 'Iskelmä Kouvola', url: 'http://stream.bauermedia.fi/iskelma/kvl_64.aac' },
	{ name: 'Iskelmä Kuopio', url: 'http://stream.bauermedia.fi/iskelma/kuo_64.aac' },
	{ name: 'Iskelmä Lahti', url: 'http://stream.bauermedia.fi/iskelma/lah_64.aac' },
	{ name: 'Iskelmä Lappeenranta', url: 'http://stream.bauermedia.fi/iskelma/lpr_64.aac' },
	{ name: 'Iskelmä Mikkeli', url: 'http://stream.bauermedia.fi/iskelma/mli_64.aac' },
	{ name: 'Iskelmä Oulu', url: 'http://stream.bauermedia.fi/iskelma/oul_64.aac' },
	{ name: 'Iskelmä Porvoo', url: 'http://stream.bauermedia.fi/iskelma/prv_64.aac' },
	{ name: 'Iskelmä Rex', url: 'http://stream.bauermedia.fi/iskelma/jns_64.aac' },
	{ name: 'Iskelmä Rovaniemi', url: 'http://stream.bauermedia.fi/iskelma/rov_64.aac' },
	{ name: 'Iskelmä Sastamala', url: 'http://stream.bauermedia.fi/iskelma/sas_64.aac' },
	{ name: 'Iskelmä Satakunta', url: 'http://stream.bauermedia.fi/iskelma/rma_64.aac' },
	{ name: 'Iskelmä Savonlinna', url: 'http://stream.bauermedia.fi/iskelma/svl_64.aac' },
	{ name: 'Iskelmä Seinäjoki', url: 'http://stream.bauermedia.fi/iskelma/snj_64.aac' },
	{ name: 'Iskelmä Turku', url: 'http://stream.bauermedia.fi/iskelma/tku_64.aac' },
	{ name: 'Iskelmä Tampere', url: 'http://stream.bauermedia.fi/iskelma/tre_64.aac' },
	{ name: 'Iskelmä Uusimaa', url: 'http://stream.bauermedia.fi/iskelma/loh_64.aac' },
	{ name: 'Iskelmä Vaasa', url: 'http://stream.bauermedia.fi/iskelma/vaa_64.aac' },
	{ name: 'Järviradio', url: 'http://radio2.6net.fi:8000/jarviradio2' },
	{ name: 'Pispalan Radio', url: 'http://digiradio.xyz:8000/pispalanradio' },
	{ name: 'Radio 957', url: 'http://stream.bauermedia.fi/radio957/radio957_64.aac' },
	{ name: 'City Helsinki', url: 'http://stream.bauermedia.fi/radiocity/hki_64.aac' },
	{ name: 'City Hämeenlinna', url: 'http://stream.bauermedia.fi/radiocity/hml_64.aac' },
	{ name: 'City Joensuu', url: 'http://stream.bauermedia.fi/radiocity/jns_64.aac' },
	{ name: 'City Jyväskylä', url: 'http://stream.bauermedia.fi/radiocity/jkl_64.aac' },
	{ name: 'City Kouvola', url: 'http://stream.bauermedia.fi/radiocity/kvl_64.aac' },
	{ name: 'City Lappeenranta', url: 'http://stream.bauermedia.fi/radiocity/lpr_64.aac' },
	{ name: 'City Oulu', url: 'http://stream.bauermedia.fi/radiocity/oul_64.aac' },
	{ name: 'City Tampere', url: 'http://stream.bauermedia.fi/radiocity/tre_64.aac' },
	{ name: 'City Turku', url: 'http://stream.bauermedia.fi/radiocity/tku_64.aac' },
	{ name: 'Dei Helsinki', url: 'http://isojako.radiodei.fi:8000/helsinki' },
	{ name: 'Dei Kajaani', url: 'http://isojako.radiodei.fi:8000/kajaani' },
	{ name: 'Dei Kemi', url: 'http://isojako.radiodei.fi:8000/tornio' },
	{ name: 'Dei Kokkola', url: 'http://isojako.radiodei.fi:8000/kruunupyy' },
	{ name: 'Dei Kristiinankaupunki', url: 'http://isojako.radiodei.fi:8000/kristiinankaupunki' },
	{ name: 'Dei Oulu', url: 'http://isojako.radiodei.fi:8000/oulu' },
	{ name: 'Dei Pohjanmaa', url: 'http://isojako.radiodei.fi:8000/lapua' },
	{ name: 'Dei Rovaniemi', url: 'http://isojako.radiodei.fi:8000/rovaniemi' },
	{ name: 'Dei Turku', url: 'http://isojako.radiodei.fi:8000/turkueurajoki' },
	{ name: 'Radio Helsinki', url: 'https://stream.radiohelsinki.fi' },
	{ name: 'Radio Kaakko', url: 'http://wr2.downtime.fi/kaakko.aac' },
	{ name: 'Radio Mikkeli', url: 'https://stream.mediatakojat.fi/mikkeli' },
	{ name: 'Radio Pooki', url: 'http://stream.bauermedia.fi/radiopooki/radiopooki_64.aac' },
	{ name: 'Radio Pori', url: 'https://stream.mediatakojat.fi/radiopori' },
	{ name: 'Radio Ramona', url: 'http://185.123.117.122:8000/ramona.mp3' },
	{ name: 'Radio SUN', url: 'http://st.downtime.fi/sun.mp3' },
	{ name: 'Radio Vaasa', url: 'http://stream.radiovaasa.fi:8000/radiovaasa.mp3' },
	{ name: 'Radio Voima', url: 'https://cast2.radiovoima.fi/voima.mp3' },
	{ name: 'Steel FM', url: 'http://ice6.securenetsystems.net/STEELFM' },
	{ name: 'Ålands', url: 'https://stream.alandsradio.ax/stream.ogg' }
];

module.exports.stations = radios;
