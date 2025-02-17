import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigasi from "./components/Navbar";
import MainPage from "./components/Home";
import AboutPages from "./components/AboutPages";
import ProgramPages from "./components/ProgramPages";
import KontakPages from "./components/KontakPages";
import SaranPages from "./components/SaranPages";
import EducarePages from "./components/EducarePages";
import HumanityPages from "./components/HumanityPages";
import IslamicPages from "./components/IslamicPages";
import CommunityPages from "./components/CommunityPages";
import BeasiswaKalla from "./components/educare/BeasiswaKalla";
import BeasiswaKeluargaKalla from "./components/educare/BeasiswaKeluarga";
import SekolahIslam from "./components/islamic/SekolahIslam";
import PaudMandiri from "./components/educare/PaudMandiri";
import ParentingIslam from "./components/educare/ParentingIslam";
import DesaBangkit from "./components/community/DesaBangkit";
import RakyatAlpukat from "./components/community/RakyatAlpukat";
import ProgramKebencanaan from "./components/humanity/ProgramKebencanaan";
import AnakSehat from "./components/humanity/AnakSehat";
import SenamJantung from "./components/humanity/SenamJantung";
import KampungHijau from "./components/humanity/KampungHijau";
import IdulFitriBahagia from "./components/islamic/IdulFitriBahagia";
import TebarIftar from "./components/islamic/TebarIftar";
import DaiDbs from "./components/islamic/DaiDbs";
import GemaSound from "./components/islamic/GemaSound";
import Asnaf from "./components/islamic/Asnaf";
import GuruNgaji from "./components/islamic/GuruNgaji";
import BinaTunarungu from "./components/islamic/BinaTunarungu";


function App() {
  return (
    <div>
      <Navigasi />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/tentang-kami" Component={AboutPages} />
        <Route path="/program" Component={ProgramPages} />
        <Route path="/kontak" Component={KontakPages} />
        <Route path="/kotak-saran" Component={SaranPages} />
        <Route path="/educare" Component={EducarePages} />
        <Route path="/humanity-environment-care" Component={HumanityPages} />
        <Route path="/islamic-care" Component={IslamicPages} />
        <Route path="/community-development" Component={CommunityPages} />
        <Route path="/beasiswa-kalla" Component={BeasiswaKalla} />
        <Route path="/beasiswa-keluarga-kalla" Component={BeasiswaKeluargaKalla} />
        <Route path="/sekolah-islam-athirah-bone" Component={SekolahIslam} />
        <Route path="/desa-bangkit-sejahtera" Component={DesaBangkit} />
        <Route path="/paud-terakreditasi-dan-mandiri" Component={PaudMandiri} />
        <Route path="/parenting-islam" Component={ParentingIslam} />
        <Route path="/pemberdayaan-ekonomi-rakyat-alpukat" Component={RakyatAlpukat} />
        <Route path="/program-respon-kebencanaan" Component={ProgramKebencanaan} />
        <Route path="/sianak-sehat" Component={AnakSehat} />
        <Route path="/kaderisasi-pelatih-senam-jantung-sehat" Component={SenamJantung} />
        <Route path="/kampung-hijau-energi" Component={KampungHijau} />
        <Route path="/tebar-iftar" Component={TebarIftar} />
        <Route path="/idul-fitri-bahagia" Component={IdulFitriBahagia} />
        <Route path="/dai-dbs" Component={DaiDbs} />
        <Route path="/gema-sound-system" Component={GemaSound} />
        <Route path="/pemberdayaan-asnaf" Component={Asnaf} />
        <Route path="/guru-ngaji-kompeten" Component={GuruNgaji} />
        <Route path="/bina-tunarungu" Component={BinaTunarungu} />
      </Routes>
    </div>
  );
}

export default App;
