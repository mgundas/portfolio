import React from 'react';

type CategoryProps = {
    name: string;
    children: React.ReactNode;
}

const Category = ({name, children}: CategoryProps) => {
    return (
        <div className="mb-5">
            <h3 className="text-3xl font-light text-gray">{name}</h3>
            <div className="flex items-center justify-start gap-4 flex-wrap py-5">
                {children}
            </div>
      </div>
    );
}

export default Category;
