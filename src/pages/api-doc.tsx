import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createSwaggerSpec } from 'next-swagger-doc'
import dynamic from 'next/dynamic'

const SwaggerUI = dynamic<{
  spec: any
}>(
  // @ts-expect-error
  import('swagger-ui-react'),
  {
    ssr: false,
  }
)

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
    },
    apiFolder: 'src/pages/api',
  })

  return {
    props: {
      spec,
    },
  }
}

export default ApiDoc
