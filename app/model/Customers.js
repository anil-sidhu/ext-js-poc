console.warn("model")
Ext.define('StudentApp.model.Customers',
    {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'address', type: 'string' }
        ],
        // proxy:
        // {
        //     type: 'ajax',
        //     url: 'http://localhost:4000/api/customers',
        //     reader:
        //     {
        //         rootProperty: 'customers',
        //         type: 'json'
        //     }

        // }
    });