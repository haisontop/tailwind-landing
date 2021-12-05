import{withRouter} from 'next/router'
import Link from "next/link";

const ActiveLink = ({router,href,children}) => {
    (function prefetchPages(){
        if(typeof window !== "undefined"){
            router.prefetch(router.pathname)
        }
    })()


    const handleClick = event =>{
        event.preventDefault()
        router.push()
    }
         const isCurrentpath = router.pathname === href || router.aspath === href;
         return <div  style={{textDecoration:'none',
         backgroundColor: isCurrentpath && "#B45309",
         border: isCurrentpath ? "none" : "2px solid #fff" ,
         color: isCurrentpath && "#000",
         padding:"16px 0px",
         borderRadius: "50px",
         }} >
          <Link href={href} onClick={handleClick}
          >
          {children}
          </Link>  
        </div>
    ;
};

export default withRouter(ActiveLink);