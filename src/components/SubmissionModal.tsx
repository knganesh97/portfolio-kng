'use client'
import React, { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { Trash2 } from "lucide-react";
import Image from "next/image";

interface SubmissionModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit?: (file: File | null, description: string) => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ open, onClose, onSubmit }) => {
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!open) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);

            // Generate preview for images/videos
            if (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("video/")) {
                setPreviewUrl(URL.createObjectURL(selectedFile));
            } else {
                setPreviewUrl(null);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) onSubmit(file, description);
        setFile(null);
        setDescription("");
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        onClose();
    };

    const handleClear = () => {
        setFile(null);
        setDescription("");
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl bg-popover shadow-2xl border border-border p-8 animate-fadeIn">
                {/* Clear Data Button */}
                <Button
                    type="button"
                    className="absolute top-3 left-3 flex items-center gap-1 text-muted-foreground hover:text-destructive rounded-full p-1 transition-colors"
                    onClick={handleClear}
                    aria-label="Clear Data"
                    variant="ghost"
                >
                    {/* Trash Icon (Heroicons outline) */}
                    <Trash2 className="w-5 h-5" />
                    <span className="text-xs font-medium">Clear</span>
                </Button>
                <Button
                    type="button"
                    className="absolute top-3 right-3 text-muted-foreground hover:text-foreground rounded-full p-1 transition-colors"
                    onClick={onClose}
                    aria-label="Close"
                    variant="ghost"
                >
                    <span className="text-2xl leading-none">&times;</span>
                </Button>
                <h2 className="text-2xl font-semibold text-popover-foreground mb-6 text-center">Submit Your Entry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-popover-foreground">Upload File</label>
                        <div className="flex items-center gap-3">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*,video/*,.pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-accent-foreground hover:file:bg-accent/80 transition"
                            />
                        </div>
                        {previewUrl && (
                            <div className="mt-3">
                                {file?.type.startsWith("image/") && (
                                    <div className="relative w-40 h-40 border border-border rounded-lg overflow-hidden">
                                        <Image
                                            src={previewUrl}
                                            alt="Preview"
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                )}
                                {file?.type.startsWith("video/") && (
                                    <video src={previewUrl} controls className="max-h-40 rounded-lg border border-border" />
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-popover-foreground">Short Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows={4}
                            className="w-full border border-input rounded-lg px-3 py-2 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                            placeholder="Describe the job..."
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-2 text-base font-semibold rounded-lg"
                        variant="primary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SubmissionModal;