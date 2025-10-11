"use client";

export default function Gallery() {

    return (
        <section className="px-6 py-8 ">
            <h2 className="text-xl font-semibold mb-4 ">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg"
                    />
                ))}
            </div>
        </section>
    )
}