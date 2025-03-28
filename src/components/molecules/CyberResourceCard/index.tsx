'use client';

import { Resource } from '@/types/resources';
import CyberResourceIcon from '@/components/atoms/CyberResourceIcon';

interface CyberResourceCardProps {
    resource: Resource;
}

export default function CyberResourceCard({ resource }: CyberResourceCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
            <div className="flex items-start gap-3">
                <div className="mt-1">
                    <CyberResourceIcon
                        type={resource.type}
                        className={resource.type === 'file' ? 'text-accent5' : 'text-green-600'}
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">{resource.title}</h3>
                    {resource.description && (
                        <p className="mt-1 text-gray-600 text-sm">{resource.description}</p>
                    )}

                    <div className="mt-3">
                        {resource.type === 'file' ? (
                            <a
                                href={resource.url}
                                download
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Download
                                {resource.fileSize && <span className="ml-1 text-blue-200">({resource.fileSize})</span>}
                            </a>
                        ) : (
                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                            >
                                Visit Website
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
