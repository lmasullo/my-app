export async function get(req, res, next) {
    export async function get() {
        console.log('Getting Templates');
    
        // 8base endpoints
        // let myEndpoint = 'https://api.8base.com/ckb9f8fky000207lb1vuoc6kv';
        // let myToken = '6d8d2cba-7ee7-4b33-b84d-8a7ea2e4691b';
    
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
    