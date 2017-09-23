class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (characters) {
    $.ajax({
      url: "ih-api.herokuapp.com/characters",
      method: "GET",

      success: (weDidIt) => {
          console.log('Fetch ALL --> 😁');
          console.log(weDidIt);
      },
      error: (noGood) => {
          console.log('Fetch ALL --> 💩');
          console.log(noGood);
      },

    });
  }

  getOneRegister ( getJustOne ) {
    $.ajax({
      url:"ih-api.herokuapp.com/characters" + characterId,
      method: "GET",

      success: ( weDidIt ) => {
        console.log('Fetch ONE --> 😁');
        console.log(weDidIt);

      },

      error: ( noGood ) => {
        console.log('Fetch ONE --> 💩');
        console.log(noGood);
      }

    });
  }

  createOneRegister ( createOne ) {
      $.ajax({
        url: "ih-api.herokuapp.com/characters",
        method: "POST",
        data: createOne,

        success: ( weDidIt ) => {
          console.log('Create ONE --> 😁');
          console.log(weDidIt);
        },

        error: ( noGood ) => {
          console.log('Create ONE --> 💩');
          console.log(noGood);
        }

      });
  }

  updateOneRegister ( updateOne ) {
      $.ajax({
        url: "ih-api.herokuapp.com/characters" + characterId,
        method: "PATCH",
        data: updateOne,

        success: ( weDidIt ) => {
            console.log( "Update One --> 😁");
            console.log( weDidIt );
        },

        error: ( noGood ) => {
            console.log( "Update One --> 💩");
            console.log( noGood );
        }

      });
  }

  deleteOneRegister ( deleteOne ) {
      $.ajax({
        url: "ih-api.herokuapp.com/characters" + Id,
        method: "DELETE",

        success: ( weDidIt ) => {
            console.log( "Delete One ---> 😁" );
            console.log( weDidIt );
        },

        error: ( noGood ) => {
            console.log( "Delete One ---> 💩");
            console.log( noGood );
        }

      });

  }
}
