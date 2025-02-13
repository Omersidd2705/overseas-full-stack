import {useEffect,React} from 'react'
import ReactPlayer from 'react-player'
function Homepage() {
    useEffect(() => {
        const scrollContainer = document.querySelector('.card-container');
        let scrollAmount = 0;
        const scrollStep = 1; 
        const scrollInterval = setInterval(() => {
            scrollAmount += scrollStep;
            if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollAmount = 0;
            }
            scrollContainer.scrollTo({
                left: scrollAmount,
            });
        }, 10);

        return () => clearInterval(scrollInterval); 
    }, []);

    return (
    <div>

        <div className="homepage" style={{ backgroundColor: '#fdf2e0', paddingTop: '60px' }}>
        <ReactPlayer url='https://youtu.be/Mtp4t6bfX6Y?si=_zlnRl8AH5B-iYmo' style={{float: 'right', margin: '20px'   }} />
            <div className="title">
                <p className='paragraph' style={{ textAlign: 'justify', lineHeight: '1.6', margin: '20px', fontSize: '16px', color: '#333', backgroundColor: '#fdf2e0',fontFamily: 'Saywhat', fontWeight: '500'}}>
                    We cordially invite you to our forum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam dolorem numquam magnam dolorum nemo veritatis illo, soluta provident animi aliquid, vitae nam maiores ullam dolore tempora omnis excepturi asperiores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste quasi veritatis ipsam. Deleniti eius repudiandae sit facilis dolor, iusto officia alias voluptas consequuntur atque, temporibus quod cupiditate aliquid recusandae!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, nulla totam atque rerum omnis deserunt repellendus fugiat libero doloremque ipsa quis corrupti ex optio. Amet, sed totam et ipsa harum officia nemo modi? Libero ullam cum, perspiciatis corporis quis nam vel dolorem amet non autem voluptatem et saepe sint quo accusamus animi, beatae enim? Voluptatum nobis nisi vitae veniam repellendus earum, voluptas, eaque libero praesentium, atque maxime voluptatibus quasi ex error at laudantium sequi? Fugiat eaque sunt labore, corporis commodi harum fuga a et iure quibusdam quas ipsam dolor quis impedit, amet quidem fugit vero natus quod saepe deleniti quam?
                </p>
                <button className="connect" style={{backgroundColor: 'black',
                
  color: 'white',
  height: '50px',
  width: '200px',
  display: 'block',
  margin: '200px auto',
  
  /* These properties seem to be conflicting, you might want to decide which one to use */
  // display: 'inline-block',
  // width: 'fit-content',
  
  paddingLeft: '0.5rem', /* 5px */
  paddingRight: '0.1rem', /* 5px */
  paddingTop: '0.1rem', /* 2.5px */
  paddingBottom: '0.1rem', /* 3px */
  marginTop: '1.5rem', /* 6px */
  textAlign: 'center',
  fontSize: '0.875rem', /* 14px */
  fontWeight: '700', /* Bold */
  borderRadius: '0.5rem', /* 8px */
  backgroundColor: '#1e1e1e',
  transition: 'background-color 0.2s ease'
                 }}>Connect with our expert</button>
            </div>
            <img src="\2.jpg" alt="innerseat" width="500px" height="500px" style={{float: 'right', margin: '20px'   }} />
                <p style={{textAlign: 'justify', lineHeight: '1.6', margin: '20px', fontSize: '16px', color: '#333', backgroundColor: '#fdf2e0',fontFamily: 'Saywhat', fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic nihil mollitia eaque quod neque ex rem molestias
                 harum cumque deserunt tenetur perferendis illo dolorum temporibus amet fuga, suscipit, qui voluptatum vel necessitatibus 
                 incidunt! Et perferendis, incidunt veniam odit reiciendis, repellat ipsum expedita vitae iure ullam, dignissimos architecto
                  atque dolorum. Fugiat, alias. Laudantium dolor cumque accusantium explicabo ipsam distinctio quasi deleniti autem, neque aliquam 
                  consequuntur quas libero facilis reiciendis voluptate eaque omnis culpa dignissimos placeat commodi, vel labore deserunt
                   fugit? Quisquam ipsam alias assumenda, cumque debitis commodi sequi at iusto, obcaecati animi officia sapiente dolores ad natus
                    voluptatum ipsa. Doloribus sed a dolore voluptates sit ad quo reprehenderit, magni id rem tenetur aspernatur quos laborum cum obcaecati officiis mollitia hic! Debitis, 
                    atque facilis? Repellat, unde consectetur. Excepturi sit provident, explicabo repellat eligendi totam blanditiis id. Eaque quae expedita, reiciendis deserunt totam vitae
                     sint aliquid. Doloribus alias consectetur dolore eveniet, ipsam perferendis quos aspernatur in ipsa nulla saepe molestiae delectus ex explicabo fuga culpa architecto dicta enim quisquam obcaecati voluptatibus expedita est. Quo ab odit dolore voluptatem officiis! Velit error amet voluptatem distinctio magni inventore magnam vel nisi, molestias odio ipsum modi, eos ipsam numquam aut eaque alias consequatur, doloribus in voluptates blanditiis. Dignissimos, quibusdam. Deleniti porro perferendis voluptatem officia laboriosam, temporibus veritatis corporis ad voluptatibus ullam inventore blanditiis officiis qui expedita similique quas? Quis suscipit deleniti consectetur fugit dicta? Iste impedit necessitatibus eligendi itaque voluptatibus quos quasi, officiis ad praesentium quae vitae neque aliquid deleniti nulla sequi! Cumque quas, nam alias temporibus incidunt reprehenderit? Eveniet tempore voluptates, nulla aspernatur dignissimos cupiditate accusantium, quas mollitia, velit provident illum illo alias quo ratione. Fuga consequatur quidem, expedita explicabo beatae inventore fugit tempora eius? Qui repellat voluptates quidem iure libero facere ex nulla assumenda, aliquid quia repellendus quaerat possimus dolor temporibus optio ab, exercitationem expedita ut voluptatum dolore nemo. Ut, necessitatibus at! Reiciendis iure rerum deleniti vero cupiditate quisquam adipisci iusto accusamus doloremque. Culpa ipsum possimus ipsa aspernatur earum quibusdam laudantium, iusto reiciendis fugiat recusandae harum iste officia dolore soluta quae, nostrum voluptatem, quasi asperiores quam alias laboriosam ea magni pariatur eveniet. Consectetur repellendus maxime nulla et voluptate saepe dolorum repellat inventore cumque dolor eos, deleniti illo deserunt necessitatibus dolorem natus quidem suscipit, excepturi omnis architecto, facere voluptates quibusdam eligendi a? Non aliquam illum quis animi aspernatur perferendis, commodi saepe totam quia dolores ut cum laborum maxime mollitia nostrum repudiandae in fugiat! Facere culpa voluptate doloribus quae vitae error aliquam consectetur asperiores, vel assumenda repudiandae quas vero cupiditate possimus quo necessitatibus corrupti suscipit optio. Molestias eius omnis explicabo nihil est, architecto similique molestiae sapiente porro ducimus veniam earum placeat perspiciatis illo, tempora ea excepturi quo labore? Tempora vel beatae temporibus fuga incidunt quo, labore, cumque nesciunt esse alias sint nam veritatis? Cupiditate, velit quia totam quasi, architecto iusto possimus eum repudiandae ratione at dolore itaque eos
                 dignissimos quisquam dolorem fugit magnam nostrum enim corporis commodi minus nihil! Inventore voluptate, numquam itaque iste error veniam et molestiae temporibus earum voluptatum harum! Qui, quia temporibus.</p>
            <div className="card-container" style={{ display: 'flex', overflowX: 'scroll', padding: '20px' }}>
                
                {[
                    { imgSrc: '/1.jpg', title: 'Card 1', description: 'Description for card 1' },
                    { imgSrc: '/2.jpg', title: 'Card 2', description: 'Description for card 2' },
                    { imgSrc: '/3.jpeg', title: 'Card 3', description: 'Description for card 3' },
                    { imgSrc: '/4.jpeg', title: 'Card 3', description: 'Description for card 3' },
                    { imgSrc: '/5.jpeg', title: 'Card 3', description: 'Description for card 3' },
                    { imgSrc: '/6.jpeg', title: 'Card 3', description: 'Description for card 3' },
                    { imgSrc: '/7.jpeg', title: 'Card 3', description: 'Description for card 3' },
                    { imgSrc: '/8.jpeg', title: 'Card 3', description: 'Description for card 3' }
                ].map((card, index) => (
                    <div key={index} className="card" style={{ minWidth: '300px', margin: '0 10px', backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={card.imgSrc} alt={card.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                        <div className="card-content" style={{ padding: '10px' }}>
                            <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>{card.title}</h3>
                            <p style={{ fontSize: '14px', color: '#666' }}>{card.description}</p>
                        </div>
                    </div>

                ))}
            </div>
                
        </div>
        <div className="ecommerce-cards" style={{  display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                marginLeft: '78px',
                marginRight: '78px',
                gap: '48px 24px' }}>
            {[
            { title: 'Product 1', imgSrc: 'UniversitiesImage.webp',  price: 'Surf through 2000+ universities abroad, all in one place, with easy filter & sort options' },
            { imgSrc: 'TestPrepImage.webp', title: 'Product 2', price: ' Surf through 2000+ universities abroad, all in one place, with easy filter & sort options' },
            { imgSrc: 'CollegeFinderImage.webp', title: 'Product 3', price: ' Surf through 2000+ universities abroad, all in one place, with easy filter & sort options' },
            { imgSrc: 'ConnectImage.webp', title: 'Product 4', price: 'Surf through 2000+ universities abroad, all in one place, with easy filter & sort options' },
            { imgSrc: 'EventsImage.webp', title: 'Product 5', price: 'Surf through 2000+ universities abroad, all in one place, with easy filter & sort options' },
            { imgSrc: 'FinanceImage.webp', title: 'Product 6', price: ' Surf through 2000+ universities abroad, all in one place, with easy filter & sort options' }
            ].map((product, index) => (
            <div key={index} className="ecommerce-card" style={{ flex: '1 1 calc50% - 20px)', margin: '10px', backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ margin: '10px 0', color: '#333',fontFamily: 'Saywhat', fontWeight: '500', fontSize: '14px', }}>{product.title}</h3>
                <p style={{ fontSize: '16px', color: '#666',fontFamily: 'Saywhat', fontWeight: '500' }}>{product.price}</p>
                <img src={product.imgSrc} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                <div className="ecommerce-card-content" style={{ padding: '10px' }}>
                </div>
            </div>
            ))}
        </div>
        <h1> Premium section </h1>
        <div className="hero-section" style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 20px', backgroundColor: '#e0f7fa' }}>
            {[
            { imgSrc: '/LoanSantioned.svg', title: 'Hero Card 1', description: 'Description for hero card 1' },
            { imgSrc: '/ScholarshipsGranted.svg', title: 'Hero Card 2', description: 'Description for hero card 2' },
            { imgSrc: '/SuccessfullAdmits.svg', title: 'Hero Card 3', description: 'Description for hero card 3' }
            ].map((hero, index) => (
            <div key={index} className="hero-card" style={{ width: '30%', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <img src={hero.imgSrc} alt={hero.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                <div className="hero-card-content" style={{ padding: '10px' }}>
                <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>{hero.title}</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>{hero.description}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="footer" style={{ padding: '12px 24px', backgroundColor: '#333', display: 'flex', gap: '106px', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
        <div>
          <h4>About Us</h4>
          <p>Learn more about our mission and values.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
          
    </div>
)
}

export default Homepage
