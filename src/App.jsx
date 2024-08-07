
function Header(){
  return(
    <>
       <h2>The Adventures of Sherlock Holmes</h2><Title/>
    </>
  )
};

function Content(){
  return(
    <> 
       <p>collection of short stories by British writer Arthur Conan Doyle, 
        first published on 14 October 1892. <br></br><Title/>It contains the earliest short stories 
        featuring the consulting detective Sherlock Holmes, <br />which had been published 
        in twelve monthly issues 
        of The Strand Magazine from July 1891 to June 1892.</p>
    </>
  )
};


function Footer(){
  return(
    <>
       <p style={{color:"grey"}}>This page was last edited on 4 August 2024. All rights are reserved.</p><Title/>
    </>
  )
}

function Title(){
  return(
    <>
      <p style={{color:"red"}}>must read</p>
    </>
  )
}

function App() {

  return ( 
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div> 
       
  );
}

export default App;
