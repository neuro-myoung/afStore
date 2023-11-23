import { useLoaderData } from '@remix-run/react';

export async function loader({ context }) {
    return await context.storefront.query(COLLECTIONS_QUERY);
}

export function Collections(props) {
    const collections = props.collections
    return (
        <section className="w-full gap-4">
            <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
                Collections
            </h2>
            <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3">
            </div>
        </section>
    );
}
