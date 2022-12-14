import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import TestIntro from './components/personalTest/TestIntro';
import VsIntro from './components/VS/VsIntro';
import Kakaologin from './pages/Kakao';
import Kakaologout from './pages/KakaoLogout';
import KakaoEnd from './pages/KakaoEnd';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';
import MorePage from './pages/MorePage';
import MyBoxPage from './pages/MyBoxPage';
import TagSearchPage from './pages/TagSearchPage';
import TempPage from './pages/TempPage';
import TestPage from './pages/TestPage';
import VsPage from './pages/VsPage';
import VsResultPage from './pages/VsResultPage';
import { axiosBasic } from './stores/atom';
import TestResultPage from './pages/TestResultPage';

const App = () => {
  // const KakaoRefresh = async () => {
  //   try {
  //     const response = await axiosBasic.post('api/token/refresh', {
  //       refresh: `${localStorage.getItem('refreshtoken')}`,
  //     });
  //     console.log(response.data);
  //     console.log('리프레쉬 성공');

  //     localStorage.setItem('accesstoken', response.data.access);
  //     localStorage.setItem('refreshtoken', response.data.refresh);
  //     setTimeout(KakaoRefresh, 1000 * 60 * 4);
  //   } catch (e) {
  //     console.log(e);
  //     console.log('리프레쉬 불가');
  //   }
  // };

  // if (performance.navigation.type === 1) {
  //   //새로고침하면 바로 로그인 연장(토큰 갱신)
  //   if (localStorage.accesstoken) KakaoRefresh();
  // }

  return (
    <Routes>
      <Route element={<Header></Header>}>
        <Route path="/oauth/kakao/callback" element={<Kakaologin />} />
        <Route path="/logout" element={<Kakaologout />} />
        <Route path="/end" element={<KakaoEnd />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mybox" element={<MyBoxPage />} />
        <Route path="/tagsearch" element={<TagSearchPage />} />
        <Route path="/tagsearch/:name" element={<TagSearchPage />} />
        <Route path="/vs" element={<VsPage />} />
        <Route path="/vsintro" element={<VsIntro />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/testresult" element={<TestResultPage />} />
        <Route path="/testintro" element={<TestIntro />} />
        <Route path="/vsresult" element={<VsResultPage />} />
        <Route path="/detail/:novelNo" element={<DetailPage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/temp" element={<TempPage />} />
      </Route>
    </Routes>
  );
};

export default App;
