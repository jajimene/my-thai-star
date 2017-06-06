# Devon4Sencha migration to ExtJS 6.5

## Pagination plugin

ExtJS 6.5 already provides pagination on *modern* toolkit.
However, the way to use pagination differs from *classic* to *modern*, e.g.:
    
* classic: use a `pagingtoolbar` component as the bottombar

```javascript
Ext.create('Ext.grid.Panel', {
    title: 'Simpsons',

    store: store,

    columns: [...],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
```

* modern: do not instantiate the component directly, but use the 
`pagingtoolbar` plugin in the grid

```javascript
Ext.create('Ext.grid.Grid', {
    title: 'DC Personnel',

    store: store,

    columns: [...],

    plugins: [{
        type: 'pagingtoolbar'
    }]
});
```

Currently, devon4sencha provides a plugin named "Pagination" for both *classic* and *modern* grids. This can be useful to unify and simplify the use of pagination for both toolkits, but it prevents us from setting additional/custom configurations (e.g. `displayInfo: 'true'`). 

So, although we can keep the "Pagination" plugin implementation, I would recommend to use the Sencha *official* way for each toolkit (see above examples).