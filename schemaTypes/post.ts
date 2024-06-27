import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'timeReading',
      title: 'Tiempo de lectura (Minutos)',
      type: 'number',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
    }),
    defineField({
      name: 'views',
      title: 'Vistas',
      type: 'number',
      description: 'Numero de vistas del post',
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
