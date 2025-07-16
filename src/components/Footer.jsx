

function Footer(){
const currentYear = new Date().getFullYear()
return (
    <div className="footer">
        <footer>
         <p>© {currentYear}</p>     
        </footer>
    </div>
      
)
}

export default Footer