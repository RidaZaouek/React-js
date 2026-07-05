import TagButtons from "./TagButtons";

const SideMenu = () => {

  const categories = [
    {
      uniqueId: 1,
      title: "آخر المقالات",
      c: (
        <div>
          <span>😀😀😀</span>
        </div>
      ),
    },

    {
      uniqueId: 2,
      title: "الأكثر قراءة",
      c: (
        <div>
          <img
            style={{ width: "200px" }}
            src="https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"
          />
        </div>
      ),
    },

    {
      uniqueId: 3,
      title: "مميز",
      c: (
        <>
        <div>
            <h1>Click Me</h1>
            <span>👍🏻</span>
        </div>
          
        </>
      ),
    },
  ];

  const categoriesList = categories.map((cat) => {
    return (
      <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
      <TagButtons key={cat.uniqueId} title={cat.title}>
        {cat.c}
      </TagButtons>
      </div>
    );
  });

  return (
    <div style={{ border: "solid teal 5px" ,margin:"25px" }}>

      {categoriesList}

    </div>
  );
}

export default SideMenu