import Card from '../Card/Card';

export default function Cards({characters}) {
   const onClose = () => window.alert('Emulamos que se cierra la card')
   return (
   <div>
      
         {
            characters.map((element, index)=>{
               return (
                  <Card 
                  key={index}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}
                  ></Card>
               )
            })
         }
      
   </div>);
}
