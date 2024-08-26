import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import Search from './component/Search';

// 1. 이름, 연락처, 이미지 등록 폼
// 2. 연락처 리스트, search 박스/버튼
// 3. 연락처 갯수 출력
// 4. 이름으로 검색 기능

function App() {
  return (
    <div className="bg-[#cba5a4] min-h-screen">
      <header className='flex flex-col items-center py-8 gap-8'>
        <h1 className='title text-6xl font-semibold text-white max-sm:text-4xl'>📖Phone Book📖</h1>
        <div className='flex gap-2'>
          <ContactForm/>
          <Search/>    
        </div>
      </header>
      <ContactList/>
    </div>
  );
}

export default App;
