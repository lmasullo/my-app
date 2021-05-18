export async function get(req, res, next) {
    export async function get() {
        console.log('Getting Templates');
    
        // 8base endpoints
    
    
        // const module = await import('graphql-request');
        // GraphQLClient = module.GraphQLClient;
        // const graphQLClient = new GraphQLClient(myEndpoint, {
        //     headers: {
        //         authorization: `Bearer ${myToken}`
        //     }
        // });
    
        // const query = `
        // {
        // edshiftsresEvalTemplatesList(filter: { deleted: { equals: false } }) {
        //   items {
        //     id
        //     templateName
        //   }
        // }
        // }
        // `;
        // const data = await graphQLClient.request(query);
        // let evalTemplates = data.edshiftsresEvalTemplatesList.items;
        // console.log('evalTemplates: ', evalTemplates);
    
        let evalTemplates = {
            id: "1234",
            name: "Larry"
        }
    
        return {
          body: evalTemplates,
        };

        r//es.send({evalTemplates})
    
    }
    