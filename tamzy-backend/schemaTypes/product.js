export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    //  NEW: ADD THIS BLOCK HERE
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Watches', value: 'watches' },
          { title: 'Bracelets', value: 'bracelets' },
          { title: 'Necklaces', value: 'necklaces' },
          { title: 'Others', value: 'others' } 
        ]
      }
    },
    // END NEW BLOCK
    {
      name: 'tag',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean'
    }
  ],
}