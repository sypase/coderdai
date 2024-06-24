import { Card } from '@/components/ui/card'

export function Classifiers() {
    return (
        <div>
            <div className="text-md text-primary pb-4 font-semibold">
                Utilize Calla's pre-trained classifiers to find and extract data such as sentiment, labels, topics, and
                more. You can also train your own custom classifiers from your datasets, and use them to extract data.
            </div>
            <h2 className="text-lg font-bold mb-2">Documents</h2>
            <div className="flex flex-cols items-center justify-center">
                <Card className="my-2 p-4 w-[735px] text-center">
                    <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                    <p className="text-lg">
                        We're working on bringing you document analysis features. Stay tuned for updates!
                    </p>
                </Card>
            </div>
        </div>
    )
}